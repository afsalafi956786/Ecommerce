const express=require('express');
const { userRegister,userLogin,deleteUser,getuserStatus,addtocart } = require('../controller/user');
const router=express.Router();

router.post('/register',userRegister);
router.post('/login',userLogin);
router.delete('/:id',deleteUser);
router.get('/status',getuserStatus);
router.post('/add-to-cart',addtocart)



module.exports=router;
