const express=require('express');
const {body}=require('express-validator');
const router=express.Router();
const captainController=require('../controllers/captain.controller');
const authMiddleware=require('../middlewares/auth.middleware');
router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be of at least 3 characters'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:8}).withMessage('Password must be of at least 8 characters'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be of at least 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be of at least 3 characters'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
],captainController.registerCaptain);


router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:8}).withMessage('Password must be of at least 8 characters')
],captainController.loginCaptain);

router.get('/profile',authMiddleware.authCaptain,captainController.captainProfile)
router.get('/logout',captainController.logoutCaptain);

module.exports=router;