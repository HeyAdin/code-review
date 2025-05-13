const app = require('./src/app');
const port = 3002
require('dotenv').config();
app.listen(port,()=>{
    console.log("Server is listening")
})