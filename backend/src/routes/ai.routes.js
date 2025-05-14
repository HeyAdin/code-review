const express = require('express');
const aiService = require('../services/ai.service')
const router = express.Router();
// const aiController = require('../controller/ai.controller')
router.post('/get-review',async(req,res)=>{
    const prompt = req.body.code;
    if(!prompt){
        res.status(403).json({msg:"invalid prompt"});
    }
    const response = await aiService(prompt);
    res.status(200).send(response)
})

module.exports = router;