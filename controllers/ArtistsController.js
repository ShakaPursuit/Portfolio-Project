const express = require('express');
const ArtistsController= express.Router();

//  QUERIES
const {getAllArtist,getArtistById,createArtist,updateArtist,deleteArtist}=require('../queries/artist')

//VALIDATIONS
const{checkBoolean, checkName}=require(`../validations/checkArtists`)
//SHOW
ArtistsController.get('/', async (req,res)=>{
    const artists = await getAllArtist();
    if(artists[0]){
        res.status(200).json(artists)
    }else{
        res.status(500).json({error: `Internal Server Error`})
    }

});

//INDEX?????
ArtistsController.get('/:id',async (req,res)=>{
    try{
            const artist= await getArtistById(req.params.id);
            
            res.status(200).json(artist)
}catch(error){
            res.status(500).json({error: `Internal Server Error`})
    }


});

//CREATE
ArtistsController.post('/',checkBoolean, checkName,async (req,res)=>{
   try{ const newArtist= await createArtist(req.body)
    res.status(200).json(newArtist)

   }catch(error){
    res.status(500).json({error:`Internal Server Error`})

   }

})

//EDIT/UPDATE
ArtistsController.put('/:id' ,async(req,res)=>{
try{
    const updatedArtist= await updateArtist(req.body,req.params.id)
    res.status(200).json(updatedArtist);

}catch(error){
        res.status(500).json({error:`Internal Server Error`})
}

})

//DELETE

ArtistsController.delete('/:id' , async(req,res)=>{
try{
    const deletedArtist = await deleteArtist(req.params.id);
    res.status(200).json(deletedArtist);

}catch(error){
    res.status(500).json({error:`Internal Server Error`})

}

})

module.exports= ArtistsController