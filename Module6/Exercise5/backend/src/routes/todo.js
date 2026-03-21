const router = require("express").Router();
const controller = require("../controllers/todoController");

router.get("/", controller.getTodos);
router.post("/", controller.createTodo);

module.exports = router;