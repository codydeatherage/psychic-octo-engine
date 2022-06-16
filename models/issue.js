const mongoose = require('mongoose')
const Schema = mongoose.Schema
const creatorSchema = new Schema({name: {type: String, required: true }, role:{type: String, required: true }})
const Issue = new Schema(
    {
        title: { type: String, required: true },
        publisher:  { type: String, required: true },
        year:  { type: String, required: true },
        creators:  [creatorSchema],
        coverImageURL:  { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('issue', Issue)