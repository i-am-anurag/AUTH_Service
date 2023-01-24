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

    async createToken(user) {
        try {
            const result = jwt.sign(user,JWT_KEY,{expiresIn:'1d'});
            return result;
        } catch (error) {
            console.log("Something went wrong in service layer For creation a token");
        }
    }

    async verifyToken(token)
    {
        try {
            const result = jwt.verify(token,JWT_KEY);
            return result;
        } catch (error) {
            console.log("Something went wrong in service layer for token validation:",error)
        }
    }

    async checkPassword(userPlainPassword,encryptedPassword) {
        try {
            return bcrypt.compareSync(userPlainPassword,encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in service layer for password validation:",error);
            throw error;          
        }
    }
}

module.exports = UserService;