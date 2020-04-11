const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers');

//User Routes
router.get('/', ctrl.usercontroller.index);
router.post('/create', ctrl.usercontroller.create);
router.delete('/:id', ctrl.usercontroller.index);

module.exports = router;