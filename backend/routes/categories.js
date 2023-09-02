const Category = require('../models/category');
const { route } = require('./products');
const router = require('express').Router();

// POST API Route for inserting a category
router.post('/add_category', (req, res)=>{
    Category.create({
        categoryName: req.body.categoryName,
    }).then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for getting all categories
router.get('/get_categories', (req, res)=>{
    Category.findAll().then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for getting a category by id
router.get('/get_category/:id', (req, res)=>{
    Category.findByPk(req.params.id).then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for selecting categories by subcategory id
router.get('/get_categories_by_subcategory/:subcategory', (req, res)=>{
    Category.findAll({where: {subCategoryId: req.params.subcategory}}).then((result)=>{
        if (result.length == 0){
            return res.status(404).send('No Results Found');
        }
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// PATCH API Route for updating the Category Attributes
router.patch('/update_category/:id', (req, res)=>{
    Category.findByPk(parseInt(req.params.id)).then((categoryName) => {
        if (categoryName){
            for (let i in req.body){
                categoryName[i] = req.body[i];
            }
            categoryName.save().then((result)=>{
                return res.status(200).send(result);
            });
        }else{
            return res.status(404).send('No Category Found with the given ID');
        }
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// DELETE API Route for deleting a category by id
router.delete('/delete_category/:id', (req, res)=>{
    Category.findByPk(parseInt(req.params.id)).then((categoryName) => {
        if(categoryName){
            categoryName.destroy().then((result)=>{
                return res.status(200).send(result);
            });
        } else {
            return res.status(404).send('No Category Found with the given ID');
        }
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

module.exports = router;