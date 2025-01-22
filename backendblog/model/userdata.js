const mongoose=require('mongoose');
const userschema=mongoose.Schema({
    userName:String,
    userEmail:String,
    userPassword:String,
    userPhone:Number

   

})

//mapping the schema to the collection

const userData=mongoose.model('user',userschema);

module.exports=userData;