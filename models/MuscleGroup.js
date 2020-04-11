const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MuscleGroupSchema = new Schema({
    core: [{
        title: String,
        length: Number,
        description: String,
        }],
    upperBody: [{
        title: String,
        length: Number,
        description: String,
    }],
    lowerBody: [{
        title: String,
        length: Number,
        description: String,
    }],
})

module.exports = mongoose.model('MuscleGroup', MuscleGroupSchema);