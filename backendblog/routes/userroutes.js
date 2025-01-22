const express=require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended: true }));

const userModel=require('../model/userdata');


router.post('/login',async(req,res)=>{
    
    const user=await userModel.findOne({userEmail:req.body.userEmail});
    if(!user){
        res.status(404).send({message:'user not found'});
    }
    try {
        if(user.userPassword == req.body.userPassword)
            res.status(200).send({message:'login successfull'})
        else{
            res.status(404).send({message:'invalid credential'})
        }
    } catch (error) {
        console.log(error);
    }
} )







module.exports=router;