const mongoose=require('mongoose');
const blogschema=mongoose.Schema({
    titleName:String,
    titleDescription:String,
    titleImage:String
   

})

//mapping the schema to the collection

const blogData=mongoose.model('blog',blogschema);

module.exports=blogData;