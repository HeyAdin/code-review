const express = require('express');
const aiService = require('../services/ai.service')
const router = express.Router();
// const aiController = require('../controller/ai.controller')
router.get('/get-response',async(req,res)=>{
    const prompt = req.query.prompt;
    if(!prompt){
        res.status(403).json({msg:"invalid prompt"});
    }
    const response = await aiService(prompt);
    res.status(200).send(response)
})

module.exports = router;