const HistoryModel = require("../models/history.model");
const { HistoryResponseSchemas } = require("../schemas/history.schemas");

const historyController = {
  async getAllByUidAndLid(req, res) {
    try {
      const query = {
        uid: req.params.uid,
        lid: req.params.lid,
      };

      const data = await HistoryModel.find(query);
      return res
        .status(200)
        .json({ data: HistoryResponseSchemas.default(data) });
    } catch (error) {
      console.error(error);
      return res.status(404).json({ message: "Not found!", error });
    }
  },
};

module.exports = historyController;
