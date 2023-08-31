const Sequelize = require('sequelize');
const sequelize = require('../configurations/config');

const Inventory = sequelize.define('Inventory', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

module.exports = Inventory;