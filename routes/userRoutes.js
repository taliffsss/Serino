const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/userController");

// POST /api/login - Login endpoint
router.post("/auth", loginUser);

module.exports = router;
