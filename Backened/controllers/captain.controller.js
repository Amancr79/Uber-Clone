const captainModel=require('../Models/captain.model');
const { validationResult }=require('express-validator');
const captainServices = require('../services/captain.services');

module.exports.registerCaptain = async(req,res,next)=>{
    const errors=validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()});
    }
    const {fullname,email,password,vehicle}=req.body;

    const isCaptain=await captainModel.findOne({email});
    if(isCaptain){
        return res.status(400).json({message:'Captain already exists'});
    }
    const hashPassword=await captainModel.hashPassword(password);
    const captain=await captainServices.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    })
    const token=captain.generateAuthToken();
    res.status(201).json({token,captain});
}