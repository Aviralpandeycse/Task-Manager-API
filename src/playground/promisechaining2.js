require("../db/mongoose");
const Task = require("../models/task");

// Task.find().then((tasks) => console.log(tasks));
// Task.findByIdAndDelete("5f625062fc290e3260de9ea9")
//   .then((res) => {
//     console.log(res);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Task.count({ completed: false }).then((res) => console.log(res));

const deleteTaskAndCount = async (id, completed) => {
  const del = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return count;
};

deleteTaskAndCount("5f625062fc290e3260de9ea9", true)
  .then((count) => console.log("Count: ", count))
  .catch((e) => console.log(e));
