const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const userController=require('../controllers/user.controller')
const authMiddleware=require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be of at least 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be of 8 characters')
], userController.registerUser);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('password must be of 8 characters')    
],userController.loginUser)


router.get('/profile',authMiddleware.authUser,userController.profileUser);

router.get('/logout',authMiddleware.authUser,userController.logoutUser);

module.exports=router;