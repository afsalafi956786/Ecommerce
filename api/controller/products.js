
const express=require('express');
const productModel=require('../model/productSchema')


module.exports.addProduct=async(req,res)=>{
    try{
        const {title,desc,img,categories,size,color,price} =req.body;

        const newProducts=new productModel({
            title,
            desc,
            img,
            categories,
            size,
            color,
            price
        });
        await newProducts.save();
        res.status(200).json(newProducts)
    }catch(error){
        console.log(error.message)
    }
}


module.exports.updatedProduct=async(req,res)=>{
    try{
        const {title,desc,img,categories,size,color,price} =req.body;
        if(!title && !desc && !img && !categories && !size && !color && !price){
            res.status(404).json({message:'all fields are required!!'})
        }
        const productId=req.params.id;
        const product=await productModel.findByIdAndUpdate(productId,{
            title,
            desc,
            img,
            categories,
            size,
            color,
            price
        })
        return res.status(200).json({product})
        
    }catch(error){
        console.log(error.message)
    }
}

module.exports.getAllProducts=async(req,res)=>{
    try{
        const qNew=req.query.new;
        const qCategory=req.query.category;
          let products;
        if(qNew){
           products=  await productModel.find().sort({createdAt:-1}).limit(1);
        }else if(qCategory){
             products=await productModel.find({
                categories:{
                    $in:[qCategory]
                },
            })
        }else{
             products=await productModel.find()
        } 

        res.status(200).json(products)

    }catch(error){
        console.log(error.message)
    }
}

module.exports.getOneProduct=async(req,res)=>{
    try{
        const productId=req.params.id;
        const products=await productModel.findById(productId);
        res.status(200).json({products})
    }catch(error){
        console.log(error.message)
    }
}