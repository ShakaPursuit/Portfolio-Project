const db = require ('../db/db.ConFig');


const getAllArtist = async () => {

    try {
        const allArtist = await db.any('SELCT * FROM artist');
        return allArtist;

    } catch (error) {
        return error;

    }
}

const getArtistById= async(id) =>{
    try{ 
        const artist = await db.one('SELECT 8 FROM artist WHERE id=$1',[id])
            return artist;

    }catch(error){
        return error;
    }

}

const createArtist= async ( artist)=>{
try{
    const newArtist = await db.one('INSERT INTO artist (name, skills,genre,instruments,independent,years_of_experience,record_label) VALUES ($1.$2,$3,$4,$5,$6,$7) RETURNING *'[artist.name,artist.skills,artist.genre,artist.instruments,artist.independent,artist.years_of_experience,artist.record_label])
return newArtist
}catch(error){
return error
}

}


const updateArtist = async(artist, id)=>{
   
    try{
        const updatedArtist = await db.one('UPDATE artist SET name=$1,skills=$2,genre=$3,instruments=$4,independent=$5,years_of_experience=$6,record_label=$7 '[artist.name,artist.skills,artist.genre,artist.instruments,artist.independent,artist.years_of_experience,artist.record_label,id])
            return updatedArtist
    }catch{(error)
return error
    }
}

const deleteArtist = async(id)=>{
    try{
        const deletedArtist= await db.one('DELETE FROM artist WHERE id =$1 RETURNING *',[id]);
        return deletedArtist
    }catch(error){return error}
}

module.exports={getAllArtist,getArtistById,createArtist,updateArtist,deleteArtist}