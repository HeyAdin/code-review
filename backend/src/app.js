const express = require('express');
const app = express();
const aiRoutes = require('./routes/ai.routes')
app.get('/', (req, res) => {
    res.json({ msg: "Hello" })
})

app.use('/ai',aiRoutes)
module.exports = app;