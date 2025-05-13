const aiService = require('../services/ai.service')

// module.exports.getResponse = async(req,res)=>{
//     const prompt = req.query.prompt;
//     if(!prompt){
//         res.status(403).json({msg:"invalid prompt"});
//     }
//     const response = await aiService(prompt);
//     res.status(200).send(response)
// }