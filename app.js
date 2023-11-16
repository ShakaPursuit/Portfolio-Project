const express = require('express');
const cors= require('cors');
const morgan = require("morgan");

const app= express();

//Middle Ware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

//Accessing Router and Setting paths
 app.get("/",(req,res)=>{res.send('Welcome to Music Connection!')})

const ArtistsController = require('./controllers/ArtistsController');
app.use("/artist", ArtistsController);

app.get("*",(req,res)=>{res.status(404).send('Not Found')});

module.exports = app