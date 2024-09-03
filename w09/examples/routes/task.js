const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({msg: 'Read all tasks of the logged-in user'});
});

router.get("/taskID", (req, res) => {
  res.json({msg: 'Read a task for the logged-in user'});
});

router.post("/", (req, res) => {
  res.json({msg: 'Create a new task for the logged-in user'});
});

router.put("/:taskID", (req, res) => {
  res.json({msg: `Update the task ${req.params.taskID} for the logged-in user`});
});

router.delete("/:taskID", (req, res) => {
  res.json({msg: `Delete the task ${req.params.taskID} of the logged-in user`});
});

exports.task = router;
