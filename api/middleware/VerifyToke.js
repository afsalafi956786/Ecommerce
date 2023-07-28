
const jwt=require('jsonwebtoken');

module.exports.verifyToken = (req, res,next) => {
  try {
     let token=req.headers['usertoken'];
     if(token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err) res.status(401).json({message:'user not authenticated!'});
            req.userId=decoded.userId;
            next()
        })
     }else{
        res.status(404).json({message:'user not finded!'})
       
     }
  } catch (error) {
    console.log(error.message);
  }
};
