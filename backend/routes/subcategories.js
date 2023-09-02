const Product = require('../models/product');
const SubCategory = require('../models/subCategory');
const router = require('express').Router();

// POST API Route for inserting a subcategory
router.post('/add_subcategory', (req, res)=>{
    SubCategory.create({
        subCategoryName: req.body.subCategoryName,
        categoryId: parseInt(req.body.categoryId)
    }).then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for getting all subcategories
router.get('/get_subcategories', (req, res)=>{
    SubCategory.findAll().then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for getting a subcategory by id
router.get('/get_subcategory/:id', (req, res)=>{
    SubCategory.findByPk(req.params.id).then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// PATCH API Route for updating the SubCategory Attributes
router.patch('/update_subcategory/:id', (req, res)=>{
    SubCategory.findByPk(parseInt(req.params.id)).then((category) =>{
        if (category){
            for (let i in req.body){
                category[i] = req.body[i];
            }
            category.save().then((result)=>{
                return res.status(200).send(result);
            });
        }else{
            return res.status(404).send('No Category Found with the given ID');
        }
    }).catch((err)=>{
        return res.status(500).send(err);
    })
});

// DELETE API Route for deleting a subcategory by id
router.delete('/delete_subcategory/:id', (req, res)=>{
    SubCategory.findByPk(parseInt(req.params.id)).then((category) =>{
        if (category){
            category.destroy().then((result)=>{
                return res.status(200).send(result);
            })
        }else{
            return res.status(404).send('No Category Found with the given ID');
        }
    }).catch((err)=>{
        return res.status(500).send(err);
    })
});

module.exports = router;