const express = require('express');

const router = express.Router();
const taskController = require('../controller/task');

const {
  body
} = require('express-validator');
const isAuth = require('../middleware/auth');

// GET all tasks
router.get('/tasks', taskController.getTasks);

// POST new task
router.post('/add-task', [
    body('title')
    .trim()
    .isLength({
      min: 5
    }),
    body('description')
    .trim()
    .isLength({
      min: 5
    }),
    body('date').trim().isLength({
      min: 5
    }),
  ],
  taskController.postAddTask
);

// GET task by ID
router.get('/tasks/:taskId', taskController.getTaskById);

// PUT update task by ID
router.put('/edit-task/:taskId', [
    body('title').trim().isLength({
      min: 5
    }),
    body('description')
    .trim()
    .isLength({
      min: 5
    }),
    body('date').trim().isLength({
      min: 5
    }),
  ],
  taskController.putUpdateTask
);

// DELETE task by ID
router.delete('/deletetask/:taskId', taskController.deleteTask);


module.exports = router;