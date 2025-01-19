const mapService=require('../services/map.service')
const {validationResult}=require('express-validator')

   getCoordinates=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()});
    }

    const {address}=req.query;
    try{
        const coordinates=await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    }catch(err){
        res.status(504).json({message:'coordinates not found'});
    }

}

getDistanceTime=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()});
    } 

    try{
    const {origin,destination}=req.query;
    const distanceTime=await mapService.getDistanceTime(origin,destination);
    res.status(200).json(distanceTime);

   }catch(err){

    res.status(504).json({message:'Internal Server error'});
   }
}

getAutoCompleteSuggestions=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.status(404).json({errors:errors.array()});
    }
    try{
        const {input}=req.query;
        const suggestions=await mapService.getAutoCompleteSuggestions(input);

        res.status(200).json(suggestions)
    }catch(err)
{
 res.status(504).json({message:'Internal server error'});
}}
module.exports ={getCoordinates,getDistanceTime,getAutoCompleteSuggestions};