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
        type: Sequelize.STRING(5000),
        allowNull: true
    },
    productPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    productURL: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    productSPEC: {
        type: Sequelize.STRING(1000),
        allowNull: true
    }
});

module.exports = Product;
