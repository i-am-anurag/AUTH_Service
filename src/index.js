const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
// const UserRepository = require('./repository/user-repository');
const app = express();

const prepareandStartServer = () =>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api',apiRoutes);
    console.log("Hello Form node js");
    app.listen(PORT,async()=>{
        console.log(`Server Running On PORT No:${PORT}`);
        // const repo = new UserRepository();
        // const response = await repo.getbyId(1);
        // console.log(response);

    });
}

prepareandStartServer();