const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

// Jwt web tokens provide a particular identity to user
var jwt = require('jsonwebtoken');

// Bcrypt is used to salt the password coming from body
var bcrypt = require('bcryptjs');
var config = require('../config/database');

router.post('/', (req, res) => {
    var hashedPassword = bcrypt.hashSync(req.body.password, 10); 

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: hashedPassword,
        repassword: hashedPassword,
        _id: new mongoose.Types.ObjectId()
    });

    User.findOne({ email: user.email }, (userExists) => {
        if (userExists) {
            res.status(500).json({
                message: 'User already exists'
            });
        } else {
            user.save().then((response) => {
                // create a token
                var token = jwt.sign({ id: response._id }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.status(201).json({
                    userId: user._id,
                    token: token
                });
            }).catch((error) => console.log(error));
        }
    });
});

router.get('/', (req, res) => {
    User.find()
        .exec()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => console.log(error));
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    User.remove({ _id: id })
        .exec()
        .then((response) => {
            res.status(200).json({
                message: 'User Deleted Successfully'
            })
        })
        .catch((error) => console.log(error));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .exec()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => console.log(error));
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    // new true is set to send the updated doc to the FE in mongoose V4    
    User.findByIdAndUpdate(id, req.body, { new: true }).exec().then((response) => {
        res.status(200).json(response)
    });

});
module.exports = router;
