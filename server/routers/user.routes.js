const express = require("express");

// local imports:
const userController = require("../controllers/user.controller");

const router = express.Router();

// POST ROUTES:
router.post("/", userController.add);

// DELETE ROUTES:
router.delete("/:uid", userController.deleteByUid);

// PUT ROUTES:
router.put("/:uid", userController.updateByUid);

// GET ROUTES:
router.get("/:uid", userController.getByUid);

module.exports = router;
