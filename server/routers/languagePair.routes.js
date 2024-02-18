const express = require("express");

// local imports:
const languagePairController = require("../controllers/languagePair.controller");

const router = express.Router();

// POST ROUTES:
router.post("/", languagePairController.add);
router.post("/:uid/:_id", languagePairController.getConvertedCode);
router.post("/:uid/:_id/explain", languagePairController.getExplanationOfCode);

// DELETE ROUTES:
router.delete("/:uid/:_id", languagePairController.deleteByLid);
router.delete("/:uid", languagePairController.deleteAllByUid);

// PUT ROUTES:

// GET ROUTES:
router.get("/:uid", languagePairController.getByUid);
router.get("/:uid/:_id", languagePairController.getOneById);

module.exports = router;
