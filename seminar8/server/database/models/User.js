const { sequelize } = require("../server");
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    role: {
        type: DataTypes.ENUM,
        values: ['user', 'admin', 'tester'],
        validate: {
            isIn: [['user', 'admin', 'tester']]
        }
    }
})

module.exports = User;

