const { Router } = require('express');
const User = require('../models/user');
const Product = require('../models/product');
const router = require('express').Router();

// POST API Route for inserting a user
router.post('/add_user', (req, res)=>{
    User.create({
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        userRole: req.body.userRole
    }).then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for getting all users
router.get('/get_users', (req, res)=>{
    User.findAll().then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for getting a user by id
router.get('/get_user/:id', (req, res)=>{
    User.findByPk(req.params.id).then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// GET API Route for selecting users by role
router.get('/get_users_by_role/:role', (req, res)=>{
    User.findAll({where: {userRole: req.params.role}}).then((result)=>{
        if (result.length == 0){
            return res.status(404).send('No Results Found');
        }
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(500).send(err);
    });
});

// PATCH API Route for updating the User Attributes
router.patch('/update_user/:id', (req, res)=>{
    User.findByPk(parseInt(req.params.id)).then((result)=>{
        if (result){
            for (let i in req.body){
                result[i] = req.body[i];
            }
            result.save().then((result)=>{
                return res.status(200).send(result);
            });
        }else{
            return res.status(404).send('No User Found with the given ID');
        }
    }).catch((err)=>{
        return res.status(500).send(err);
    })
});

// DELETE API Route for deleting a user by id
router.delete('/delete_user/:id', (req, res)=>{
    User.findByPk(parseInt(req.params.id)).then((result)=>{
        if(result){
            result.destroy().then((result)=>{
                return res.status(200).send(result);
            })
    }else{
        return res.status(404).send('No User Found with the given ID');
    }}).catch((err)=>{
        return res.status(500).send(err);
    })
});

module.exports = router;