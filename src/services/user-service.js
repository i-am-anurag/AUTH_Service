const UserRepository = require('../repository/user-repository');

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
}

module.exports = UserService;