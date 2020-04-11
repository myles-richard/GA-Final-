const express = require("express");
const router = express.Router();
const ctrl = require("../Controllers");

// Auth
router.post("/register", ctrl.auth.signUp);
router.post("/login", ctrl.auth.logIn);

// router.get("/verify", ctrl.auth.verify);


module.exports = router;