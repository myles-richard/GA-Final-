const express = require("express");
const router = express.Router();
const ctrl = require("../Controllers");
const auth = require('../middleware/auth');


//Workout Routes
router.get('/', auth, ctrl.workout.index);
router.get('/:id', ctrl.workout.show);
router.post('/create', ctrl.workout.create);
router.put('/:id', auth, ctrl.workout.save);
router.put('/unsave/:id', auth, ctrl.workout.delSave);
router.delete('/:id', ctrl.workout.destroy);

module.exports = router;