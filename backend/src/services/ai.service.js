const  OpenAI = require('openai');
// console.log(process.env.OPENAI_API_KEY);
require('dotenv').config();
const groq = new OpenAI({
    apiKey: process.env.GROQ_API_KEY, // This is the default and can be omitted
    baseURL: 'https://api.groq.com/openai/v1', // 🔁 key change
  });
  

async function generateContent(prompt) {
    const response = await groq.chat.completions.create({
        model: 'llama3-70b-8192', // Or use 'llama3-70b-8192'
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
      });

      return response.choices[0].message.content
}

module.exports = generateContent;