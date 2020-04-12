const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


const index = async (req,res) => {
    try {
        const workouts = await db.Workout.find({ user: req.user.id  });
        res.json(workouts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const create = async (req,res) => {
    try{
        const newWorkout = await db.Workout.create(req.body);
        if(!newWorkout) return res.status(404).json({ error: 'Workout could\'t be created!'});
        return res.json(newWorkout);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json('Server Error')
    }
    
}

//Delete user
const destroy = async (req,res) => {
    try {
        const deletedWorkout = await db.Workout.findByIdAndDelete({_id: req.params.id});
        if(!deletedWorkout) return res.status(404).json({ error: 'Workout with that ID couldn\'t be found'});
        return res.json(deletedWorkout);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json('Server Error')
    }
}

module.exports = {
    index,
    create,
    destroy
}