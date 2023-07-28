const mongoose=require('mongoose');

const cartShcema=new mongoose.Schema({
   userId:{
    type:String,
    requied:true,
   },
   proudcts:[
    {
        productId:{
            type:String, 
        },
        quantity:{
            type:Number,
            default:1,
        }
    }
   ]
},{
    timestamps:true
})
const cartModel=mongoose.model('cart',cartShcema);
module.exports=cartModel;

