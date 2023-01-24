const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
// const UserService = require('./services/user-service');
const app = express();

const prepareandStartServer = () =>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api',apiRoutes);
    console.log("Hello Form node js");
    app.listen(PORT,async()=>{
        console.log(`Server Running On PORT No:${PORT}`);
        // const newService = new UserService();
        // const token = newService.createToken({ email: 'anurag@admin.com',id:1});
        // console.log(token);
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJlbWFpbCI6ImFudXJhZ0BhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjc0NTQyNzY2LCJleHAiOjE2NzQ1NDYzNjZ9.13O-Bp9d_7C_1lvH0ioZ6UX5g5MRXvDiBuOuOv913hE";
        // const response = newService.verifyToken(token);
        // console.log(response);
    });
}

prepareandStartServer();