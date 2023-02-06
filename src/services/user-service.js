const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserRepository = require('../repository/user-repository');

const {JWT_KEY} = require('../config/serverConfig')
class UserService
{
    constructor(){
        this.userRepository = new UserRepository();
    }
     
    async create(data)
    {
        try {
            const response = await this.userRepository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async destroy(userId)
    {
        try {
            const response = await this.userRepository.destroy(userId);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async signIn(email, plainPassword) {
        try {
            //Step 1 fetch the user by email
            const user = await this.userRepository.getByemail(email);
            //Step 2 compare incoming plain password and encrypted password
            const passswordMatch = this.checkPassword(plainPassword,user.Password);
            //Step 3
            if(!passswordMatch)
            {
                console.log("Passsword does'nt match");
                throw {error:"Incorrect Password"};
            }
            //step 4 if password match then create JWT token send it to user
            const newJWT = this.createToken({email:user.email,id:user.id});
            return newJWT;
        } catch (error) {
            console.log("Something went wrong in service layer in singin Process");
            throw error;
        }
    }
    
    async isAuthenticated(token) {
        try {
            const response = this.verifyToken(token);
            if(!response) 
            {
                throw {err: 'Invalid Token'}
            }

            const user = await this.userRepository.getbyId(response.id);
            if(!user)
            {
                throw {error: "No user with correspondeing token exist"};
            }

            return user.id;
        } catch (error) {
            console.log("Something went wrong in service layer in auth process");
            throw error;
        }
    }
    
    createToken(user) {
        try {
            const result = jwt.sign(user,JWT_KEY,{expiresIn:'1d'});
            return result;
        } catch (error) {
            console.log("Something went wrong in service layer For creation a token");
            throw error;
        }
    }

    verifyToken(token)
    {
        try {
            const result = jwt.verify(token,JWT_KEY);
            console.log("The result is:",result);
            return result;
        } catch (error) {
            console.log(`Something went wrong in service layer for token validation: ${error}`);
            throw error;
        }
    }

    checkPassword(userPlainPassword,encryptedPassword) {
        try {
            return bcrypt.compareSync(userPlainPassword,encryptedPassword);
        } catch (error) {
            console.log(encryptedPassword);
            console.log("Something went wrong in service layer for password validation:",error);
            throw error;          
        } 
    }
}

module.exports = UserService;