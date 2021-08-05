const Workout = require("../models/Workout.js");
const router = require("express").Router();

router.post("/api/workouts", ({body}, res)=>{
    Workout.create({})
    .then((dbWorkout)=>{
        res.json(dbWorkout);
    })
    .catch(({message})=>{
        console.log(message);
    });
});

router.put('/api/workouts/:id', async (req, res) => {
    console.log(req.body)
    Workout.findByIdAndUpdate(
      req.params.id, {
        $push: { exercises: req.body } })
      .then((response) => {
        res.json(response)
      })
      .catch((err) => {
        res.json(err)
      });
    });

router.get("/api/workouts/range", (req, res)=>{
    Workout.find({})
    .limit(7)
    .then((dbWorkout)=>{
        res.json(dbWorkout);
    })
    .catch((err)=>{
        res.json(err);
    });
});

router.get("/api/workouts", (req, res)=>{
    Workout.find({})
    .then((dbWorkout)=>{
        res.json(dbWorkout);
    })
    .catch((err)=>{
        res.json(err);
    });
});

module.exports = router;