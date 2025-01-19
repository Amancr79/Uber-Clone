const rideServices=require('../services/ride.services')
const {validationResult}=require('express-validator')

module.exports.createRide = async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.status(404).json({errors:errors.array()});
    }
    const {pickup,destination,vehicleType}=req.body;
    try{

       const ride=await rideServices.createRide({user :req.user._id,pickup,destination,vehicleType});
       res.status(200).json({message:ride}); 
    }catch(err){
        res.status(400).json({message:err.message});
    }
};