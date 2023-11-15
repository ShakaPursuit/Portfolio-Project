const express = requre('express');
const ArtistsController= express.Router();
const {getAllArtist,getArtistById,createArtist,updateArtist,deleteArtist}=require('../queries/artist')