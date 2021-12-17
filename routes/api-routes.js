// Import express router
const router = require("express").Router();

// Import workout model
const { Workout } = require("../models");

// GET Request for getting all workouts
router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields:{
        totalDuration:{
          $sum:"$exercises.duration"
        }
      }
    }
  ])
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET request
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration:{
          $sum:"$exercises.duration"
        }
      }
    }
  ])
  .sort({
    _id: -1
  })
  .limit(7)
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// POST workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT/Update workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Export API routes
module.exports = router;
