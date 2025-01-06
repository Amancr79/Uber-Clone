const express=require('express');
const {body}=require('express-validator');
const router=express.Router();
const captainController=require('../controllers/captain.controller');

router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be of at least 3 characters'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:8}).withMessage('Password must be of at least 8 characters'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be of at least 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be of at least 3 characters'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
],captainController.registerCaptain);

module.exports=router;