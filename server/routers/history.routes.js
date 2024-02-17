const express = require("express");

// local imports:
const historyController = require("../controllers/history.controller");

const router = express.Router();

// GET ROUTES:
router.get("/:uid/:lid", historyController.getAllByUidAndLid);

module.exports = router;
