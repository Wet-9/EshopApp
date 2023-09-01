const environment = process.env.NODE_ENV || 'development';

if(environment === 'development'){
    host = 'ecomerce-project-397317:us-central1:ecomerce'
    database = 'ecommerce'
    username = 'root';
    password = '';
    type = 'mysql';
} else {
    console.log('Running from localhost. Connecting to DB directly.');
    host = '127.0.0.1';
    database = 'ecommerce';
    username = 'root';
    password = 'password';
    type = 'mysql';
}

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'ecommerce',
    'root',
    'password',
    {dialect: 'mysql'}
);
// const databaseOptions = {
//     dialect: type,
//     host: host
// }

// if(environment === 'production'){
//     databaseOptions.dialectOptions = {
//         socketPath: host,
//     }
// }

// const sequelize = new Sequelize(database, username, password, databaseOptions);

module.exports = sequelize;