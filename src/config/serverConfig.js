const env = require('dotenv');

//it Start Configuration 
env.config();

module.exports = {
    PORT:process.env.PORT
}