const path = require('path')
const express = require("express");
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000;

const app = express();
// Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Set Static folder
app.use(express.static(path.join(__dirname, 'Public')))

app.use('/openai',require('./Routes/openaiRoutes'))

app.listen(port, () => {console.log(`Server started with ${port}`)});