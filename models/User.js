const mongoose = require('mongoose')
const Workout = require('./Workout');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    password: {
        type: String,
        required: true,
    },
    email: String,
    date: {
        type: Date,
        default: Date.now
    },
    goals: String,
    savedWorkouts: [Workout.schema],
})

module.exports = mongoose.model('User', UserSchema)