const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: String,
    time: Number,
    goodFor: [String],
    exercise:[{title: String, description: String}],
    description: String,
    type:[String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Workout', WorkoutSchema);