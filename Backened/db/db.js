const mongoose=require('mongoose');

const DB_Url=process.env.DB_Url;

function connectToDb(){
    mongoose.connect(DB_Url).then(()=>{
        console.log('connect to DB');
      }).catch(err=>console.log(err));
}

module.exports=connectToDb;