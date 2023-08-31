const Sequelize = require('sequelize');
const sequelize = require('../configurations/config');

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userFirstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userLastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userEmail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userPassword: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userRole: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;