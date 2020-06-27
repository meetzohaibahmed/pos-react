const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    costPrice:{
        type: Number,
        required: false,
        default: 0
    },
    sellPrice:{
        type: Number,
        required: false
    },
    company:{
        type: String,
        required: false
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product',ProductSchema)