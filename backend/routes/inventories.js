const Inventory = require('../models/inventory');
const Product = require('../models/product');
const router = require('express').Router();

// POST API Route for inserting a inventory
router.post('/add_inventory', (req, res)=>{
    Inventory.create({
        quantity: parseInt(req.body.quantity),
        productId: parseInt(req.body.productId)
    }).then((results)=>{
        return res.status(200).send(results);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for getting all inventories
router.get('/get_inventories', (req, res)=>{
    Inventory.findAll().then((result) =>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for getting a inventory by id
router.get('/get_inventory/:id', (req, res)=>{
    Inventory.findByPk(req.params.id).then((results)=>{
        return res.status(200).send(results);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for selecting inventories by product id
router.get('/get_inventories_by_product/:product', (req, res)=>{
    Inventory.findAll({where: {productId: req.params.product}}).then((results)=>{
        if (results.length == 0){
            return res.status(404).send('No Results Found');
        }
        return res.status(200).send(results);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// PATCH API Route for updating the Inventory Attributes
router.get('/update_inventory/:id', (req, res)=>{
    Inventory.findByPk(parseInt(req.params.id)).then((product) =>{
        if (product){
            for (let i in req.body){
                product[i] = req.body[i];
            }
            product.save().then((result)=>{
                return res.status(200).send(result);
            });
    }else{
        return res.status(404).send('No Product Found with the given ID');
    }}).catch((err)=>{
        return res.status(500).send(err);
    })
});

// DELETE API Route for deleting a inventory by id
router.delete('/delete_inventory/:id', (req, res)=>{
    Inventory.findByPk(parseInt(req.params.id)).then((product) =>{
        if (product){
            product.destroy().then((result)=>{
                return res.status(200).send(result);
            })
        }else{
            return res.status(404).send('No Product Found with the given ID');
        }
    }).catch((err)=>{
        return res.status(500).send(err);
    })
});

module.exports = router;