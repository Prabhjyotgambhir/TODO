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
    _id: mongoose.Schema.Types.ObjectId
});

module.exports =  mongoose.model('Task', schema);