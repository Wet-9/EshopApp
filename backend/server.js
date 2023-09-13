const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const User = require('./models/user');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models/index');

db.sequelize.authenticate().then(() => {
    console.log('connection has been established successfully');
}).catch((err) => {
    console.log(err);
});

db.sequelize.sync().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

// // drop all tables and create them again for development purposes
// db.sequelize.sync({force: true}).then(()=>
// {console.log("DB Dropped.");}).catch((err)=>{console.log(err);});

app.get('/', (req, res) => {
    res.status(200).send('This is the backend!');
});

/*
* The folowing register and login route code is referenced from TA: Emmanuel Onu
*/

//Register route
app.post('/register', function (req, res) {
    let clearTextPassword = req.body.password;
    let salt = 10;

    //Convert the clear text password to a hash value
    bcrypt.hash(clearTextPassword, salt, function (err, passwordHash) {
        let user_data = req.body;
        user_data.password = passwordHash; //replace clear text password with hash value

        //Create user in database
        User.create(user_data).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(500).send(err);
        });
    });
});

//Login route
app.post('/login', function (req, res) {
    let emailAddress = req.body.email;
    let clearTextPassword = req.body.password;

    //Find a user using the email address
    let data = {
        where: { email: emailAddress }
    };

    User.findOne(data).then((result) => {
        //Check if user was found in DB
        if (result) {
            // Compare clear text password to the hash value that was stored in DB
            bcrypt.compare(clearTextPassword, result.password, function (err, output) {
                if (output) {
                    res.status(200).send(result);
                } else {
                    res.status(401).send('Incorrect password');
                }
            });

        } else {
            res.status(404).send('User does not exist.')
        }

    }).catch((err) => {
        res.status(500).send(err);
    });
});

const products_router = require('./routes/products');
const categories_router = require('./routes/categories');
const subcategories_router = require('./routes/subcategories');
const inventory_router = require('./routes/inventories');
const users_router = require('./routes/users');
const orders_router = require('./routes/orders');

app.use('/products', products_router);
app.use('/categories', categories_router);
app.use('/subcategories', subcategories_router);
app.use('/inventories', inventory_router);
app.use('/users', users_router);
app.use('/orders', orders_router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});