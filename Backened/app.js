const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
const express=require('express');
const app=express();
const userRoutes=require('./routes/user.routes');
const connectToDb=require('./db/db');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
//this is for accepting request from all domain otherwise if we put domain inside the cors it will support only that domain and block other
connectToDb();

app.get('/',(req,res)=>{
    res.send('hello');
});

app.use('/users',userRoutes);


module.exports=app;