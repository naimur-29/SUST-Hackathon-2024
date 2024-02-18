const mongoose = require("mongoose");
const { LanguagePairSchema } = require("../schemas/languagePair.schemas");
const languagePairModel = new mongoose.model(
  "LanguagePairs",
  LanguagePairSchema
);

module.exports = languagePairModel;
