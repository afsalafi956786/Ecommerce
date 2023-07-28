const express=require('express');
const { addProduct,getAllProducts,updatedProduct,getOneProduct } = require('../controller/products');
const router=express.Router();


router.post('/add',addProduct);
router.get('/',getAllProducts);
router.put('/:id',updatedProduct);
router.get('/:id',getOneProduct)

module.exports=router;