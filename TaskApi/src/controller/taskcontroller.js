const TaskModel = require("../model/taskModel");

exports.getTasks = (req, res) => {
  res.status(200).json(TaskModel.getAllTasks());
};

exports.createTask = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Task name is required" });

  const newTask = { id: Date.now().toString(), name, completed: false };
  TaskModel.addTask(newTask);
  res.status(201).json(newTask);
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const deletedTask = TaskModel.deleteTask(id);

  if (!deletedTask) return res.status(404).json({ message: "Task not found" });

  res.status(200).json(deletedTask);
};
