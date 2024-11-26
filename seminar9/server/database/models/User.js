const { sequelize } = require("../server");
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
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

