const mongoose = require('mongoose')

const Contact_Person_Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Number,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    industry: {
        type: String,
        required: false,
    },
    additional_info: {
        type: String,
        required: false,
    },
})

module.exports = mongoose.model(
    'cpmodel',
    Contact_Person_Schema,
    'CpCollections'
)
