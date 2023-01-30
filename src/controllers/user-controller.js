const UserService = require('../services/user-service');

const userService = new UserService();

const create = async(req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            Password: req.body.Password,
        });

        return res.status(201).json({
            data: response,
            success: true,
            message: 'User created successfully',
            err:{},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"There is an error for creating the user.",
            err:error,
        })
    }
}

const deleteUser = async(req, res) => {
    try {
        const response = await userService.destroy(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'User deleted successfully',
            err:{},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"There is an error for deleting the user.",
            err:error,
        })
    }
}

const signIn = async (req, res) =>{
    try {
        const response = await userService.signIn(req.body.email,req.body.Password);
        console.log(response);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'User Signin successfully',
            err:{},
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:"There is an error in sigin to the user",
            err:error,
        })
    }
}

module.exports = {
    create,
    signIn,
    deleteUser,
}