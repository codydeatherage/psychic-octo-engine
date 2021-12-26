const express = require('express');
const ctrl = require('./controllers.js');
const router = express.Router();
router.get('/', ctrl.getItems)
router.post('/', ctrl.createItem);
module.exports = router