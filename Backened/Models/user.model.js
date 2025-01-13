const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      require: true,
      minLength: [3, "First name must be at least 3 characters"],
    },
    lastname: {
      type: String
    },
  },
  email: {
    type: String,
    require: true,
    unique: true,
    minLength: [5, "email must be at least 5 characters"],
  },
  password: {
    type: String,
    require: true,
    minLength: [8, "password must be at least 8 characters"],
  },
  socketid: {
    type: String,
  },
});

userSchema.methods.generateAuthToken=function(){
  const token=jwt.sign({_id: this._id} ,process.env.JWT_SECRET,{expiresIn:'1d'});
  return token;
}

userSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword= async function(password){
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
