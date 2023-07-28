const express=require('express');
const app=express();
const connectDb=require('./connection/dbConnect');
const morgan = require('morgan');
const userRouter=require('./routes/user');
const authRouter=require('./routes/auth');
const proudctRouter=require('./routes/product')


DATA_BASE_CONNECTION='mongodb://127.0.0.1:27017'
connectDb(DATA_BASE_CONNECTION)
const  port=5000

app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/product',proudctRouter)

app.listen(port,()=>{
    console.log(`server running at the port is ${port}`)
})