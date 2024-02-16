const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

router.post("/register", authController.registerUser.bind(authController));
router.post("/login", authController.loginUser.bind(authController));
router.get("/logout", authController.logoutUser.bind(authController));

module.exports = router;