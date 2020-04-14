const express = require("express");
const router = express.Router();
const ctrl = require("../Controllers");
const auth = require('../middleware/auth');
const { check } = require('express-validator');


// authenticating user 
router.post("/",[
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Password is required').exists()
], ctrl.auth.logIn);
// Sign Up user 
router.post('/signup',[
    check('name', 'Please add name')
    .not()
    .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 4 or more characters').isLength({ min: 4 })
], ctrl.auth.signUp);
//get logged in user 
router.get('/', auth, ctrl.auth.getUser);
// router.get("/verify", ctrl.auth.verify);


module.exports = router;