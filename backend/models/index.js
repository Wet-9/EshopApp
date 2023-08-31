const sequelize = require('../configurations/config');
const Product = require('../models/product');
const Category = require('../models/category');
const SubCategory = require('./subCategory');
const Inventory = require('../models/inventory');
const User = require('../models/user');

const db = {};

// one to many relationship
SubCategory.hasMany(Product, {foreignKey: {name: 'subCategoryId', allowNull: false, onDelte: 'CASCADE', onUpdate: 'CASCADE'}});

Product.belongsTo(SubCategory);

//one to one relationship
Product.hasOne(Inventory, {foreignKey: {name: 'productId', allowNull: false, onDelte: 'CASCADE', onUpdate: 'CASCADE'}});

Inventory.belongsTo(Product);
// one to many relationship
Category.hasMany(SubCategory, {foreignKey: {name: 'categoryId', allowNull: false, onDelte: 'CASCADE', onUpdate: 'CASCADE'}});

SubCategory.belongsTo(Category);
// initialize model
db.User = User;

db.sequelize = sequelize;

module.exports = db;