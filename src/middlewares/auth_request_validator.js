const AuthValidator = (req, res, next) => {
    if(!req.body.email||!req.body.password) {
        return res.status(400).json({
            data: {},
            errors: "Somethig went wrong",
            message: "missing email OR password",
            success:false,
        });
    }
    
    next();
}

module.exports = {
    AuthValidator,
}