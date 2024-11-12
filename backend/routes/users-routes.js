const express = require("express");
const usersControllers = require("../controllers/users-controller");
const router = express.Router();

router.post("/signup", usersControllers.createUser);
router.post("/login", usersControllers.loginUser);

module.exports = router;
