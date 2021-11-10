const express = require('express')
const router = express.Router()

router.post('/search', async(req, res)=>{
    const body = req.body;
    return res.status(200).json({success: true});
});

module.exports = router