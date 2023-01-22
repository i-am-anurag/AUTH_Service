const express = require('express');
const {PORT} = require('./config/serverConfig');
const app = express();
const prepareandStartServer = () =>{
    app.listen(PORT,()=>{
        console.log(`Server Running On PORT No:${PORT}`);
    });
}

prepareandStartServer();