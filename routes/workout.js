const express = require("express");
const router = express.Router();
const ctrl = require("../Controllers");
const auth = require('../middleware/auth');


//Workouts Routes
router.get('/', auth, ctrl.workout.index);
router.get('/:id', ctrl.workout.show);
router.post('/create', ctrl.workout.create);
router.delete('/:id', ctrl.workout.destroy);

module.exports = router;