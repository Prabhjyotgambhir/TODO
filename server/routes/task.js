const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const mongoose = require('mongoose');

router.post('/', (req, res) => {
    const task = new Task({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        status: 'pending',
        priority: req.body.priority,
        _id: new mongoose.Types.ObjectId()
    });


    task.save().then((response) => {
        res.status(201).json(response);
    }).catch((error) => console.log(error));
});

router.get('/', (req, res) => {
    Task.find()
        .exec()
        .then((unsortedList) => {
            for (let i = 0; i < unsortedList.length - 1; i++) {
                for (let j = 1; j < unsortedList.length; j++) {
                    if (unsortedList[j].priority > unsortedList[i].priority) {
                        const temp = unsortedList[i];
                        unsortedList[i] = unsortedList[j];
                        unsortedList[j] = temp;
                    }
                }
            }
            console.log('after', unsortedList);
            res.status(200).json(unsortedList);
        })
        .catch((error) => console.log(error));
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Task.remove({ _id: id })
        .exec()
        .then((response) => {
            res.status(200).json({
                message: 'Task Deleted Successfully'
            })
        })
        .catch((error) => console.log(error));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Task.findById(id)
        .exec()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => console.log(error));
});

router.delete('/', (req, res) => {
    Task.remove()
        .exec()
        .then((response) => {
            res.status(200).json({
                message: 'All Tasks Deleted Successfully'
            })
        })
        .catch((error) => console.log(error));
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    // new true is set to send the updated doc to the FE in mongoose V4    
    Task.findByIdAndUpdate(id, req.body, { new: true }).exec().then((response) => {
        res.status(200).json(response)
    });

});
module.exports = router;
