
const userModel=require('../model/userShema');
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken');


module.exports.userRegister=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        if(!username,!email,!password){
            res.status(404).json({message:'All fields are required!!'})
        }
        const salt= await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt)
        const newUser=new userModel({
            username,
            email, 
            password:hashPassword
        })
        await newUser.save();
        res.status(200).json(newUser)

    }catch(error){
        console.log(error.message)
    }
}

module.exports.userLogin=async (req,res)=>{
    try{
        const {email,password}=req.body;

        const user=await userModel.findOne({email:email});
        if(!user){
            res.status(404).json({message:'Cant find the user!'})
        }
        const isCompare=await bcrypt.compare(password,user.password);
        console.log(isCompare,'--')
        if(!isCompare){
            res.status(200).json({message:'Incorrect password'})
        }
        token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'3d'})
        res.status(200).json({message:'Login successful',user,token})
    }catch(error){
        console.log(error.message)
    }
}

module.exports.deleteUser=async(req,res)=>{
  try{
   const userId= req.params.id;
   await userModel.findByIdAndDelete(userId);
   res.json(200).json({message:'user deleted successfully'})

  }catch(error){
    console.log(error.message)
  }
}

module.exports.getuserStatus=async(req,res)=>{
    try{
        const date=new Date();
        console.log(date,'___')
        const lastYear=new Date(date.setFullYear(date.getFullYear() -1 ));
         const data=await userModel.aggregate([
            { $match:{createdAt:{$gte:lastYear}}  },
            {$project:{
                month:{$month:"$createdAt"},
            },},
            {$group:{_id:"$month",total:{$sum:1},},}
         ])
         res.status(200).json({data})

    }catch(error){
        console.log(error.message)
    }
}

module.exports.addtocart=async(req,res)=>{
    try{
        const {} =req.body;


    }catch(error){
        console.log(error.message)
    }
}