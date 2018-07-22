const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const mongoose = require('mongoose');

router.post('/', (req,res) => {
    const task = new Task({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        id: new mongoose.Types.ObjectId()
    });

    task.save().then((response) => {
        res.status(201).json(task);
    }).catch((error) => console.log(error) );
});

router.get('/', (req, res) => {
    Task.find()
        .exec()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => console.log(error));
});


router.delete('/:id', (req,res) => {
    const id = req.params.id;
    console.log(id);
    Task.remove({id: id})
        .exec()
        .then((response) => {
            res.status(200).json({
                message: 'Task Deleted Successfully'
            })
        })
        .catch((error) => console.log(error));
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    Task.findById(id)
        .exec()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => console.log(error));
});

module.exports = router;
