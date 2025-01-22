const express=require('express');
const morgan=require('morgan');
const app=new express();
app.use(morgan('dev'));



const blogroutes=require('./routes/blogroutes');//importing the routes
app.use('/blogroutes',blogroutes);
const userroutes=require('./routes/userroutes');//importing the routes
app.use('/userroutes',userroutes);


require('dotenv').config();//requiring the dotenv
require('./db/connection');





app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})