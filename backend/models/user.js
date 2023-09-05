const Sequelize = require('sequelize');
const sequelize = require('../configurations/config');

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userRole: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cart: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: []
    }
}, {timestamps: false});

module.exports = User;