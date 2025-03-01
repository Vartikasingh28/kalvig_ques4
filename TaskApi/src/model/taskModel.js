let tasks = [];

module.exports = {
  getAllTasks: () => tasks,

  addTask: (task) => {
    tasks.push(task);
    return task;
  },

  deleteTask: (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      return tasks.splice(index, 1)[0];
    }
    return null;
  }
};
