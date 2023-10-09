const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoControllers.js');

const router = require('express').Router();

router.route('/todo').post(createTodo).get(getTodos);
router.route('/todo/:id').patch(updateTodo).delete(deleteTodo);

module.exports = router;
