const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/:id", userController.getUserById.bind(userController));
router.get("/", userController.getAllUser.bind(userController));

router.delete("/:id", userController.deleteUser.bind(userController));
router.put("/:id", userController.updateUser.bind(userController));


module.exports = router;