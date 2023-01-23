const {User} = require('../models/index');

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
}

module.exports = UserRepository;