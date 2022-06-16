const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    publisher: String,
    year: Number,
    image: {
        type: String
    }
}, { timestamps: true })

const Item = mongoose.model('Item', itemSchema);
module.exports = Item