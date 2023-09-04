const Sequelize = require('sequelize');
const sequelize = require('../configurations/config');

const Category = sequelize.define('Category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    categoryName: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps: false});

module.exports = Category;
