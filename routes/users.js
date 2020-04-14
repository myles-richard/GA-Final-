const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

//User Routes
router.get('/', ctrl.users.index);
router.get('/:id', ctrl.users.show);


router.put('/:id', auth, ctrl.users.update);
router.delete('/:id', ctrl.users.destroy);

module.exports = router;