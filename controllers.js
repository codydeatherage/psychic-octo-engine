const Item = require("./models/items.js");
const Issue = require("./models/issue.js");
const db = require('./db')

const addIssue = (async (req, res, next) => {
    const issue = new Issue(req.body);
    console.log(`received an issue: ${issue}`);
    db.collection('issues').insertOne(issue)
        .then(() => {
            console.log(`Creating new Issue: ${issue.title}`);
            return (res.status(200).json({
                id: issue._id,
                message: 'issue added successfully'
            }))
        })
        .catch(err => {
            console.log('error adding issue');
            return res.status(400).json({
                err,
                message: 'Issue was not added.'
            })
        })
})

const getItems = async (req, res) => {
    console.log('get items')
    try {
        const item = await Item.find()
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const createItem = async (req, res) => {
    const item = new Item(req.body);
    try {
        await item.save();
        res.status(201).json(item);
    } catch (error) {
    }
}

module.exports = {
    getItems,
    createItem,
    addIssue
}