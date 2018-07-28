const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    startDate: {
        required: true,
        type: Date
    },
    endDate: {
        required: true,
        type: Date
    },
    description: {
        required: true,
        type: String
    },
    status: {
        type: String
    },
    priority: {
        type: Number,
        required: true
    },
    _id: mongoose.Schema.Types.ObjectId
}, {timestamps: true} // Used to set the time at real time basis 
);

module.exports =  mongoose.model('Task', schema); // Task here is basically a connection in mongoDB