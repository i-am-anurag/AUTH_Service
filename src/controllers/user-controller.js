const UserService = require('../services/user-service');

const userService = new UserService();

const create = async(req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            Password: req.body.password,
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

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        console.log("This is my response",response);
        return res.status(200).json({
            data:response,
            success:true,
            message:"user is authenticated and token is valid",
            err:{},
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"something went wrong",
            err:error,
        })
    }
}

const signIn = async (req, res) =>{
    try {
        const response = await userService.signIn(req.body.email,req.body.password);
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

const isAdmin = async(req, res)=>{
    try {
        const response = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Sucessfully fetch user is Admin OR not ',
            err:{},
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Something went wrong for admin validation',
            err:{},
        })
    }
}

module.exports = {
    create,
    signIn,
    deleteUser,
    isAuthenticated,
    isAdmin,
}