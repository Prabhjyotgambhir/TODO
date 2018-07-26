const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    contact: {
        required: true,
        type: Number
    },
    password: {
        required: true,
        type: String
    },
    repassword: {
        type: String
    },
    _id: mongoose.Schema.Types.ObjectId
}
);

module.exports =  mongoose.model('User', schema); // Task here is basically a connection in mongoDB