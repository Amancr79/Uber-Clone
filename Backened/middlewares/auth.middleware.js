const userModel=require('../Models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const blackListSchema=require('../Models/blacklistToken.model');


module.exports.authUser=async(req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    console.log('authhhhhh');
    if(!token){
        res.status(401).json({message:'unauthorized'});
    }

    const isBlacklist=await blackListSchema.findOne({token:token})
    if(isBlacklist){
        res.status(401).json({message:'unauthorized'});
    }

    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await userModel.findById(decoded._id);
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({message:'unauthorized'});
    }
}