const express = require("express");
const router = express.Router();
const ctrl = require("../Controllers");

// Auth
router.post("/register", ctrl.auth.signUp);
router.post("/", ctrl.auth.logIn);
//get logged in user 
router.get('/', ctrl.auth.getUser);
// router.get("/verify", ctrl.auth.verify);


module.exports = router;