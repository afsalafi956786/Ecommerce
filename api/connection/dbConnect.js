const mongoose=require('mongoose')

async function connectDb(data){
    
    try{
        mongoose.connect(data,{dbName:'Ecommerce'});
        console.log('database is connected..')
    }catch(error){
        console.log(error.message)
    }
}
module.exports=connectDb;