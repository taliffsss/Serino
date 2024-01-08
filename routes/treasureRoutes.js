// treasureRoutes.js

const express = require("express");
const router = express.Router();
const { findTreasureBoxes } = require("../controllers/treasureController");

const authMiddleware = require("../middleware/authMiddleware");

// Route for finding treasure boxes within a distance
router.post("/treasures", authMiddleware, findTreasureBoxes);

module.exports = router;
