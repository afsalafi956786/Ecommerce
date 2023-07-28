const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({
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
   ],
   amount:{
    type:Number,
    required:true,
   },
   address:{
    type:Object,
    requied:true,
   },
   status:{
    type:String,
    default:'pending',
   }
},{
    timestamps:true
})
const orderModel=mongoose.model('order',orderSchema);
module.exports=orderModel;