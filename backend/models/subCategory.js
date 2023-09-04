const Sequelize = require('sequelize');
const sequelize = require('../configurations/config');

const SubCategory = sequelize.define('SubCategory', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    subCategoryName: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps: false});

module.exports = SubCategory;
