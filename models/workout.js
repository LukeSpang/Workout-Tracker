const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          enum: ['resistance', 'cardio'],
          description: 'Cardio or Resistance Training Only'
        },
        name: {
          type: String,
          required: true,
          trim: true
        },
        distance: Number,
        duration: Number,
        weight: Number,
        sets: Number,
        reps: Number
      },
    ],
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);
  
// WorkoutSchema.virtual('totalDuration').get(() => {
//   return this.exercises.reduce((total, exercise) => {
//     return total + exercise.duration;
//   }, 0); 
// }); 
  

  
const Workout = mongoose.model("workout", WorkoutSchema);
module.exports = Workout; 