// order.js
const Sequelize = require('sequelize');
const sequelize = require('../configurations/config');

const Order = sequelize.define('Order', {
    orderId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    products: {
        // Storing products as JSON 
        // Future: refactor for a more normalized DB design
        type: Sequelize.JSON,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {timestamps: false});

module.exports = Order;
