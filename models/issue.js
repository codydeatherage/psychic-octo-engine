const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Issue = new Schema(
    {
        _id: Schema.Types.ObjectId,
        title: { type: String, required: true },
        publisher:  { type: String, required: true },
        year:  { type: String, required: true },
        creators:  [{name: {type: String, required: true }, role:{type: String, required: true }}],
        coverImageURL:  { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('issue', Issue)