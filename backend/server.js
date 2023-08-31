const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require('./models/index');

db.sequelize.authenticate().then(()=>{
    console.log('connection has been established successfully');
}).catch((err)=>{
    console.log(err);
});

db.sequelize.sync().then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});

// // drop all tables and create them again for development purposes
// db.sequelize.sync({force: true}).then(()=>
// {console.log("DB Dropped.");}).catch((err)=>{console.log(err);});

app.get('/', (req, res)=>{
    res.status(200).send('This is the backend!');
});

const products_router = require('./routes/products');
const categories_router = require('./routes/categories');
const subcategories_router = require('./routes/subcategories');
const inventory_router = require('./routes/inventories');
const users_router = require('./routes/users');

app.use('/products', products_router);
app.use('/categories', categories_router);
app.use('/subcategories', subcategories_router);
app.use('/inventories', inventory_router);
app.use('/users', users_router);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('Server is running on port ${port}...');
});