const Order = require('../models/order');
const User = require('../models/user');
const Product = require('../models/product');
const router = require('express').Router();

// GET API Route for getting all orders
router.get('/get_orders/', (req, res) => {
    Order.findAll().then((result) => {
        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err);
    });
});

// GET API Route for getting all orders for a specific user
router.get('/get_orders/:userId', (req, res) => {
    Order.findAll({ where: { userId: req.params.userId } }).then((result) => {
        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send(err);
    });
});

module.exports = router;