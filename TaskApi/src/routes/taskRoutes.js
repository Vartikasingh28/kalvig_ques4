const express = require("express");
const taskController = require("../controller/taskcontroller");

const router = express.Router();

router.get("/get-task", taskController.getTasks);
router.post("/add-task", taskController.createTask);
router.delete("/delete-task/:id", taskController.deleteTask);

module.exports = router;
