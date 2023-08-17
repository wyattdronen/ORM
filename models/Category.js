const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  { // define id column
  id: {
    type: DataTypes.INTEGER, // data type to INTEGER
    allowNull: false,  // column cannot be null
    primaryKey: true,  // set to primary key
    autoIncrement: true  // auto increment
  },
  // define 'category_name' column
  category_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
