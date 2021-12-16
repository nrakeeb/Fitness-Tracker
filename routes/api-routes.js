// Import express router
const router = require("express").Router();

// Import workout model
const { Workout } = require("../models");

// GET Request for getting all workouts
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET request
router.get("/api/workouts/range", (req, res) => {
  Workout.find()
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
