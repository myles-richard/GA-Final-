const express = require("express");
const router = express.Router();
const ctrl = require("../Controllers");
const { check } = require('express-validator');

// Auth
router.post("/register", ctrl.auth.signUp);
// authenticating user 
router.post("/",[
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Password is required').exists()
], ctrl.auth.logIn);
//get logged in user 
router.get('/', ctrl.auth.getUser);
// router.get("/verify", ctrl.auth.verify);


module.exports = router;