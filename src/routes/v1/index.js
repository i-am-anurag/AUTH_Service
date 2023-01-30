const express = require('express');
const UserController = require('../../controllers/user-controller');
const router = express.Router();

const {AuthRequestValidator} = require('../../middlewares/index');

router.post('/signup',
AuthRequestValidator.AuthValidator,UserController.create);

router.post('/signin',
AuthRequestValidator.AuthValidator,
UserController.signIn);

router.delete('/delete',UserController.deleteUser);
module.exports = router;