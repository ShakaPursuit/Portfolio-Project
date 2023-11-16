//chekcing to see if a key/value exist

const checkName =(req,res,next)=>{
    if(req.body.name){
        return next()
    }else{
        res.status(400).jsont({error:`Name is required`})
    }

};

//CHECKING THAT independent is a boolean ( or undefined)

const checkBoolean = (req,res,next)=>{

    const independent=req.body.independent;
    if(
            
            typeof independent === `boolean`
        ){
            next();
        }else{
            res.status(400).json({error: "independent must be a boolean value"})
        }
}


module.exports = {checkName,checkBoolean}