'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
    validate:{
      isEmail: true,
    }
  },
    Password: {
      type:DataTypes.STRING,
      validate:{
        len: [3,20],
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};