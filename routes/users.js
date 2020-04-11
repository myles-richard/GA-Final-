const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers');

//User Routes
router.get('/', ctrl.users.index);
router.get('/:id', ctrl.users.show);
router.post('/', ctrl.users.create);
router.put('/:id', ctrl.users.update);
router.delete('/:id', ctrl.users.destroy);

module.exports = router;