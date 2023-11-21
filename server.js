const app = require('./app.js')
const express=require('express')
require('dotenv').config();
app.use(express.json());

const PORT = process.env.PORT 

app.listen(PORT, ()=>{

    console.log(`Server running on port ${PORT}`)
})