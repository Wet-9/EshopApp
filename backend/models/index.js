const sequelize = require('../configurations/config');
const Product = require('../models/product');
const Category = require('../models/category');
const SubCategory = require('./subCategory');
const Inventory = require('../models/inventory');
const User = require('../models/user');
const Order = require('../models/order');

const db = {};

// one to many relationship
SubCategory.hasMany(Product, {foreignKey: {name: 'subCategoryId', allowNull: false, onDelete: 'CASCADE', onUpdate: 'CASCADE'}});

//one to one relationship
Product.hasOne(Inventory, {foreignKey: {name: 'productId', allowNull: false, onDelete: 'CASCADE', onUpdate: 'CASCADE'}});

// one to many relationship
Category.hasMany(SubCategory, {foreignKey: {name: 'categoryId', allowNull: false, onDelete: 'CASCADE', onUpdate: 'CASCADE'}});

// one to many relationship
User.hasMany(Order, {foreignKey: {name: 'userId', allowNull: false, onDelete: 'CASCADE', onUpdate: 'CASCADE'}});
// Order.belongsTo(User);

// initialize model
// db.User = User;
// db.PurchaseHistory = PurchaseHistory;
    
db.sequelize = sequelize;

module.exports = db;