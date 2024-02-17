const mongoose = require("mongoose");
const { HistorySchema } = require("../schemas/history.schemas");
const historyModel = new mongoose.model("History", HistorySchema);

module.exports = historyModel;
