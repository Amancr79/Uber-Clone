const userModel=require('../Models/user.model');
const userService=require('../services/user.services');
const {validationResult}=require('express-validator')

module.exports.registerUser= async(req,res,next)=>{
   const errors=validationResult(req);

   if(!errors.isEmpty())
   {
     res.status(400).json({errors : errors.array()});
   }

   const {fullname,email,password} = req.body;
   const hashPassword=await userModel.hashPassword(password);
   const user = await userService.createUser({
         firstname : fullname.firstname,
         lastname : fullname.lastname,
         email,
         password : hashPassword
   });
   const token=user.generateAuthToken();
   res.status(201).json({token,user});
}

module.exports.loginUser= async(req,res,next)=>{
  const errors=validationResult(req);
  if(!errors.isEmpty())
  {
    res.status(400).json('Internal server error');
  }

  try{
    const {email,password}=req.body;

    const user=await userModel.findOne({email}).select('+password');
    console.log('here');
    if(!user)
    {
      return res.status(401).json({message:'Invalid email or password'});
    }
    const isMatch=await user.comparePassword(password);
  
    if(!isMatch){
      return res.status(400).json('Incorrect password');
    }
  
    res.status(200).json({token:user.generateAuthToken(),user});
  
  }catch(err){
    res.status(500).json('Internal server error');
  }
}

