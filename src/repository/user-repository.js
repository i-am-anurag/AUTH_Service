const {User,Role} = require('../models/index');

class UserRepository{
    async create(data) {
        try 
        {
            const user = await User.create(data);
            return user;

        } catch (error) {
            console.log("There is an Error in Repository layer");
            throw error;
        }
    }

    async destroy(userId) {
        try 
        {
            await User.destroy({
                where:{
                    id: userId,
                }
            });
            return true;

        } catch (error) {
            console.log("There is an Error in Repository layer");
            throw error;
        }
    }

    async getbyId(userId)
    {
        try {
            const user = await User.findByPk(userId,{
                attributes: ['email','id']
            });

            return user;
        } catch (error) {
            console.log("There is an Error in Repository layer");
            throw error;
        }
    }

    async getByemail(userEmail) {
        try {
            const user = await User.findOne({where: {
                email: userEmail,
            }});
            return user;
        }
        catch(error) {
            console.log("There is an Error in Repository layer for get email");
            throw error;
        }
    }

    async isAdmin(userId) {
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                where: {
                    name:"ADMIN",
                }
            });

            return user.hasRole(adminRole);
        } catch (error) {
            console.log("There is an Error in Repository layer in admin function");
            throw error;
        }
    }
}

module.exports = UserRepository;