const express = require('express');
const ctrl = require('./controllers.js');
const Issue = require('./models/issue')
const router = express.Router();
router.get('/items', ctrl.getItems);
router.post('/', ctrl.createItem);

router.post('/issues', ctrl.addIssue);

router.post('/uploadbase', ((req, res, next) => {
    const newImg = new Image({
        imageName: req.body.imageName,
        imageData: req.body.imageData
    });

    newImg.save().then((result) => {
        res.status(200).json({
            success: true,
            document: result
        });
    }).catch((err) => next(err));
}))
module.exports = router