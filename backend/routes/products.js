const Product = require('../models/product');
const router = require('express').Router();

// POST API Route for inserting a product
router.post('/add_product', (req, res)=>{
    Product.create({
        productSKU: req.body.productSKU,
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productPrice: parseFloat(req.body.productPrice),
        subCategoryId: parseInt(req.body.subCategoryId),
        productURL: req.body.productURL,
        productSPEC: req.body.productSPEC
    }).then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for getting all products
router.get('/get_products', (req, res)=>{
    Product.findAll().then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for getting a product by id
router.get('/get_product/:id', (req, res)=>{
    Product.findByPk(req.params.id).then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for selecting products by subcategory id
router.get('/get_products_by_subcategory/:subcategory', (req, res)=>{
    Product.findAll({where: {subCategoryId: req.params.subcategory}}).then((result)=>{
        if (result.length == 0){
            return res.status(404).send('No Results Found');
        }
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// PATCH API Route for updating the Product Attributes
router.patch('/update_product/:id', (req, res)=>{
    Product.findByPk(parseInt(req.params.id)).then((product) =>{
        if (product){
            for (let i in req.body){
                product[i] = req.body[i];
            }
            product.save().then((result)=>{
                return res.status(200).send(result);
            });
        }else{
            return res.status(404).send('No Product Found with the given ID');
        }
    }).catch((err)=>{
        return res.status(500).send(err);
    })
});

// DELETE API Route for deleting a product by id
router.delete('/delete_product/:id', (req, res)=>{
    Product.findByPk(parseInt(req.params.id)).then((product) =>{
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