const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//Workouts Routes
router.get('/', ctrl.workoutscontroller.index);
router.get('/:id', ctrl.workoutscontroller.index);
// router.post('/create', ctrl.workoutscontroller.create);
router.delete('/:id', ctrl.workoutscontroller.index);

module.exports = router;