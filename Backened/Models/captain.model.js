const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const captainSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            require:true,
            minLength:[3,'Captain name must be at least 3 characters']
        },
       lastname:{
        type:String,
       }
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        minLength:[5,'email must be at least 5 characters'],
        match:[/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,'Invalid email']
    },
    password:{
            type:String,
            require:true,
            minLength:[8,'password must be at least 8 characters']
        },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            require:true,
            minLength:[3,'color must be at least 3 characters']
        },
        plate:{
            type:String,
            require:true,
            minLength:[3,'plate must be at least 3 characters']
        },
        capacity:{
            type:Number,
            require:true,
            min:[1, 'capacity must be at least 1'],

        },
        vehicleType:{
            type:String,
            enum:['car','auto','bike'],
            require:true
        }
    },
    location:{
        lat:{
            type:Number
        },
        lng:{
            type:Number
        }
    }
})


captainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id: this._id} ,process.env.JWT_SECRET,{expiresIn:'1d'});
    return token;
}

captainSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword= async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel=mongoose.model('captain',captainSchema);
module.exports=captainModel;