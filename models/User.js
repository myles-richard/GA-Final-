const mongoose = require('mongoose')
const MuscleGroup = require('./MuscleGroup');

const UserSchema = new mongoose.Schema({
    name: String, 
    email: String,
    password: String,
    savedWorkouts: [MuscleGroup.schema],
})

module.exports = mongoose.model('User', UserSchema)