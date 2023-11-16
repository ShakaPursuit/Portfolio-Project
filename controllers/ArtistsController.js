const express = requre('express');
const ArtistsController= express.Router();
const {getAllArtist,getArtistById,createArtist,updateArtist,deleteArtist}=require('../queries/artist')


//SHOW
ArtistsController.get('/', async (req,res)=>{
    const artists = await getAllArtist();
    if(artists){
        res.status(200).json(artists)
    }else{
        res.status(500).json({error: `Internal Server Error`})
    }

});

//INDEX
ArtistsController.get('/:id',async (req,res)=>{
    try{
            const artist= await getArtistById(req.params.id);
            res.status(200).json(artist)
}catch(error){
            res.status(500).json({error: `Internal Server Error`})
    }


});

//CREATE
ArtistsController.post('/',async (req,res)=>{
   try{ const newArtist= await createArtist(req.body)
    res.status(201).json(newArtist)

   }catch{
    res.status(500).json({error:`Internal Server Error`})

   }

})

//EDIT/UPDATE
ArtistsController.get('/:id', async(req,res)=>{
try{
    const updatedArtist= await updateArtist(req.params.id)
    res.status(200).json(updatedArtist);

}catch(error){
        res.status(500).json({error:`Internal Server Error`})
}

})

//DELETE

ArtistsController.get('/:id,' , async(req,res)=>{
try{
    const deletedArtist = await deleteArtist(req.params.id);
    res.status(200).json(deletedArtist);

}catch(error){
    res.status(500).json({error:`Internal Server Error`})

}

})

module.exports= ArtistsController