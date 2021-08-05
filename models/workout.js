const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutScheme = new Schema(
    {
        day: { type: Date, default: () => new Date()},
        exercise: [
            {
                type: {
                    type: String,
                },
                name: {
                    type: String,
                },
                duration: {
                    type: Number,
                },
                weight: Number,
                reps: Number,
                sets: Number,
                distance: Number,
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);
