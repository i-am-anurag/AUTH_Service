const env = require('dotenv');
const bcrypt = require('bcrypt');

//it Start Configuration 
env.config();

module.exports = {
    PORT:process.env.PORT,
    SALT:bcrypt.genSaltSync(10),
}