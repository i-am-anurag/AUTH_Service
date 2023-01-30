const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const {User} = require('./models/index');
// const bcrypt = require('bcrypt');
const { use } = require('./routes/index');
const app = express();

// const UserReository = require('./repository/user-repository');
const prepareandStartServer = () =>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api',apiRoutes);
    app.listen(PORT,async()=>{
        console.log(`Server Running On PORT No:${PORT}`);
        // const incomingPasswords = '1234567';
        // const user = await User.findByPk(8);
        // const response = bcrypt.compareSync(incomingPasswords,user.Password);
        // const repo = new UserReository();
        // const response = await repo.getbyId(1);
        // console.log(response);
    });
}

prepareandStartServer();