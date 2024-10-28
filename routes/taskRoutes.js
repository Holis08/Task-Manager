const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// CREATE Task
router.post("/", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

// READ all Tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint lain (UPDATE, DELETE) bisa ditambahkan di sini

module.exports = router;
