const express=require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended: true }));


const blogModel=require('../model/blogdata');

//get operation
router.get('/add',async (req,res)=>{
    try {
        const data=await blogModel.find();
        res.status(200).send(data);  
        }
 
    catch (error) {
        res.status(404).send('Data not found');
    }})

    router.post('/add',async (req,res)=>{
        try {
            var item=req.body;
            const data=new blogModel(item);
            await data.save();
            res.status(200).send(added);  
            }
     
        catch (error) {
            res.status(404).send('Data not found');
        }})
        router.put('/update/:id',async (req,res)=>{
            try {
                const data=await blogModel.findByIdAndUpdate(req.params.id,req.body);
                res.status(200).send('update success');  
                }
         
            catch (error) {
                res.status(404).send('update not found');
            }})
            router.delete('/delete/:id',async (req,res)=>{
                try {
                    const data=await blogModel.findByIdAndUpdate(req.params.id);
                    res.status(200).send('delete successfull');  
                    }
             
                catch (error) {
                    res.status(404).send('delete unsuccesfull');
                }})
    



module.exports=router;