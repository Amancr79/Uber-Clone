const captainModel=require('../Models/captain.model');
const { validationResult}=require('express-validator');
const captainServices = require('../services/captain.services');
const blacklistSchema = require('../Models/blacklistToken.model');

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

module.exports.loginCaptain= async(req,res,next)=>{
    const error=validationResult(req);

    if(!error.isEmpty()){
        res.status(401).json('Invalid email or password');
    }
    try{
        const {email,password}=req.body;
        const captain=await captainModel.findOne({email}).select('+password');
        if(!captain)
        {
           res.status(401).json("Captain is not registered ");
        }
        const isPasswordMatch=await captain.comparePassword(password);
        if(!isPasswordMatch){
           res.status(401).json('Invalid email or password');
        }
        const token=captain.generateAuthToken();
        res.cookie('token',token);
        res.status(201).json({message:"Login Successfull",token,captain});
    }catch (error) {
      res.status(500).json({message:"Internal server error"});   
    }
}

module.exports.captainProfile=async(req,res,next)=>{
    if(res.captain){
        res.status(201).json({captain : req.captain});
    }
}
module.exports.logoutCaptain=async(req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
    res.clearCookie(token);
    await blacklistSchema.create({token});
    res.status(201).json({message:"Logout Successfully"});
}