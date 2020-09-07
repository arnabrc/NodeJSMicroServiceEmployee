const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String,
    },
    role: {
        type: String,
    },
    phoneNumber: {
        type: Number
    }
}, {
    collection: 'employees'
});

module.exports = mongoose.model('Employee', Employee);