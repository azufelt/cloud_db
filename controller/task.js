const Task = require('../model/task');

const {
  validationResult
} = require('express-validator');

const mongoose = require('mongoose');

// GET all tasks
exports.getTasks = (req, res, next) => {
  Task.find()
    .then(tasks => {
      res.send(tasks);
    })
    .catch(error => {
      return res.status(500).send(error);
    });
}

// POST new task
exports.postAddTask = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  // new Date object
  const date_ob = new Date();

  const task = new Task({
    title: title,
    description: description,
    date: date_ob
  });

  task.save()
    .then(result => {
      console.log('created new task');
      res.send(task);
    })
    .catch(error => {
      return res.status(500).send(error);
    })
}

// GET task by ID
exports.getTaskById = (req, res, next) => {
  // const taskID = req.params.taskId;
  Task.findById(req.params.taskId)
    .then(task => {
      console.log("Your task was updated!");
      res.send(task);
    })
    .catch(error => {
      return res.status(500).send(error);
    })
}

// PUT update task by ID
exports.putUpdateTask = (req, res, next) => {
  const taskID = req.params.taskId;
  const title = req.body.title;
  const description = req.body.description;
  // new Date object
  const date_ob = new Date();

  Task.findById(taskID)
    .then(task => {
      if (!task) {
        const error = new Error('No task by that ID');
        error.statusCode = 404;
        throw error;
      }
      //Authorize user if needed

      task.date = date_ob;
      task.title = title;
      task.description = description;

      return task.save();
    })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(error => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    })
};

// DELETE task by ID
exports.deleteTask = (req, res, next) => {

  //get task by id, then delete
  Task.findById(req.params.taskId)
    .then(task => {
      if (!task) {
        console.log('That Task ID was not found');
        const error = new Error('No task by that ID');
        error.statusCode = 404;
        throw error;
      }
      //Authorize user if needed

      return Task.findByIdAndRemove(req.params.taskId);
    })
    .then(result => {
      console.log('Task Successfully Deleted');
      res.status(200).json({
        message: 'Deleted Task'
      });
    })
    .catch(error => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};