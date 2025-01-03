const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
const express=require('express');
const app=express();

app.use(cors());//this is for accepting request from all domain otherwise if we put domain inside the cors it will support only that domain and block other


app.get('/',(req,res)=>{
    res.send('hello');
});



module.exports=app;