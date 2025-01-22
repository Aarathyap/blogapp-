const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://aarathy_03:aarathy@cluster0.gmepn.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('Connection established to DB');
}).catch(()=>{
    console.log('Not connected');
})