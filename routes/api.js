const Workout = require("../models/workout.js");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/api/workouts", ({body}, res)=>{
    Workout.create({})
    .then((dbWorkout)=>{
        res.json(dbWorkout);
    })
    .catch(({message})=>{
        console.log(message);
    });
});