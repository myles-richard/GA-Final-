const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers');
const { check } = require('express-validator');

//User Routes
router.get('/', ctrl.users.index);
router.get('/:id', ctrl.users.show);
router.post('/',[
    check('name', 'Please add name')
    .not()
    .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 4 or more characters').isLength({ min: 4 })
], ctrl.users.create);

router.put('/:id', ctrl.users.update);
router.delete('/:id', ctrl.users.destroy);

module.exports = router;