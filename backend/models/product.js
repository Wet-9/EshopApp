const Sequelize = require('sequelize');
const sequelize = require('../configurations/config');

const Product = sequelize.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    productSKU: {
        type: Sequelize.STRING,
        allowNull: false
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    productDescription: {
        type: Sequelize.STRING,
        allowNull: true
    },
    productPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = Product;
