const environment = process.env.NODE_ENV || 'development';

if(environment === 'production'){
    host = '/cloudsql/ecom-397716:us-central1:ecom';
    database = 'ecommerce';
    username = 'root';
    password = '';
    type = 'mysql';
} else {
    console.log('Running from localhost. Connecting to DB directly.');
    host = 'localhost';
    database = 'ecommerce';
    username = 'root';
    password = 'password';
    type = 'mysql';
}

const Sequelize = require('sequelize');
const databaseOptions = {
    dialect: type,
    host: host
}

if(environment === 'production'){
    databaseOptions.dialectOptions = {
        socketPath: host,
    }
}

const sequelize = new Sequelize(database, username, password, databaseOptions);

module.exports = sequelize;