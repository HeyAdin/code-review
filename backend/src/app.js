const express = require('express');
const app = express();
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
app.use(express.json(),cors());

app.use('/ai',aiRoutes)
module.exports = app;