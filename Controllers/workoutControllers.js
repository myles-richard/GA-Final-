const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


const index = async (req,res) => {
    try {
        const workouts = await db.Workout.find({});
        if(!workouts) return res.status(404).json({ msg: 'No workouts found'})
        res.json(workouts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const show = async (req,res) => {
    try {
        const workout = await db.Workout.findOne({ _id: req.params.id });
        if(!workout) return res.status(404).json({ msg: 'No workout found with that ID'});
        return res.json(workout);
    } catch (err) {
        return res.status(500).json('Server Error');
    }
}

const create = async (req,res) => {
    try{
        const newWorkout = await db.Workout.create(req.body);
        if(!newWorkout) return res.status(404).json({ msg: 'Workout could\'t be created!'});
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
        if(!deletedWorkout) return res.status(404).json({ msg: 'Workout with that ID couldn\'t be found'});
        return res.json(deletedWorkout);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json('Server Error')
    }
}

module.exports = {
    index,
    create,
    show,
    destroy
}