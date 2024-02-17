const express = require("express");

// local imports:
const languagePairController = require("../controllers/languagePair.controller");

const router = express.Router();

// POST ROUTES:
router.post("/", languagePairController.add);
router.post("/:uid/:lid", languagePairController.getConvertedCode);
router.post("/:uid/:lid/explain", languagePairController.getExplanationOfCode);

// DELETE ROUTES:
router.delete("/:uid/:lid", languagePairController.deleteByLid);
router.delete("/:uid", languagePairController.deleteAllByUid);

// PUT ROUTES:

// GET ROUTES:
router.get("/:uid", languagePairController.getByUid);

module.exports = router;
