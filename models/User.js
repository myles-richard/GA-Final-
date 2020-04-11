const mongoose = require('mongoose')
const MuscleGroup = require('./MuscleGroup');

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
    savedWorkouts: [MuscleGroup.schema],
})

module.exports = mongoose.model('User', UserSchema)