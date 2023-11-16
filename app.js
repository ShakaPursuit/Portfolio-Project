const express = require('express');
const app= express();
const cors= require('cors');
const ArtistsController = require('./controllers/ArtistsController');


//Middle Ware
app.use(cors())
app.use(express.json())

//Accessing Router and Setting paths
app.get("/",(req,res)=>{res.send('Welcome to Music Connection!')})

app.use("/artist", ArtistsController);

app.get("*",(req,res)=>{res.status(404).send('Not Found')});

module.exports = app