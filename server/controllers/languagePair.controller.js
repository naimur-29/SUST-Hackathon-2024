const LanguagePairModel = require("../models/languagePair.model");
const HistoryModel = require("../models/history.model");
const {
  LanguagePairResponseSchemas,
} = require("../schemas/languagePair.schemas");
const { convertCode, explainCode } = require("../services/openai");

const languagePairController = {
  // add new languagePair:
  async add(req, res) {
    try {
      const data = req.body;
      const resData = await LanguagePairModel.create(data);
      return res.status(201).json(resData);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "Post unsuccessful!", error });
    }
  },
  // get all language pairs by uid:
  async getByUid(req, res) {
    try {
      const query = {
        uid: req.params.uid,
      };
      const data = await LanguagePairModel.find(query);
      if (data === null)
        return res.status(404).json({ message: "Not found!", error });
      return res
        .status(200)
        .json({ data: LanguagePairResponseSchemas.default(data) });
    } catch (error) {
      console.error(error);
      return res.status(404).json({ message: "Not found!", error });
    }
  },
  // get one language pairs by _id:
  async getOneById(req, res) {
    try {
      const query = {
        uid: req.params.uid,
        _id: req.params._id,
      };
      const data = await LanguagePairModel.findOne(query);
      if (data === null)
        return res.status(404).json({ message: "Not found!", error });
      return res
        .status(200)
        .json({ data: LanguagePairResponseSchemas.default(data) });
    } catch (error) {
      console.error(error);
      return res.status(404).json({ message: "Not found!", error });
    }
  },
  // delete languagePair by lid(language id):
  async deleteByLid(req, res) {
    try {
      const query = {
        uid: req.params.uid,
        _id: req.params._id,
      };
      await LanguagePairModel.deleteOne(query);
      await HistoryModel.deleteOne({
        uid: req.params.uid,
        lid: req.params._id,
      });
      return res.status(204).json({
        message: `Successfully deleted lid=${req.params._id} from uid=${req.params.uid}!`,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: `Delete lid=${req.params._id} from uid=${req.params.uid} unsuccessful!`,
        error,
      });
    }
  },
  // delete all languagePairs under the given uid:
  async deleteAllByUid(req, res) {
    try {
      const query = {
        uid: req.params.uid,
      };
      await LanguagePairModel.deleteMany(query);
      return res.status(204).json({
        message: `Successfully deleted all language pairs from uid=${req.params.uid}!`,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: `Delete all language pairs from uid=${req.params.uid} unsuccessful!`,
        error,
      });
    }
  },
  async getConvertedCode(req, res) {
    try {
      const query = {
        uid: req.params.uid,
        _id: req.params._id,
      };

      // user input code:
      const input = req.body.input;

      let data = await LanguagePairModel.findOne(query);
      if (data === null)
        return res.status(404).json({ message: "Not found!", error });

      // out converted code:
      const output = await convertCode(input, {
        from: data?.name?.split(" To ")[0],
        to: data?.name?.split(" To ")[1],
      });

      // add convert history:
      await HistoryModel.create({
        lid: query._id,
        uid: query.uid,
        content: {
          input,
          output,
        },
      });

      return res.status(200).json({ data: output });
    } catch (error) {
      console.error(error);
      return res.status(404).json({ message: "Not found!", error });
    }
  },
  async getExplanationOfCode(req, res) {
    try {
      const query = {
        uid: req.params.uid,
        _id: req.params._id,
      };

      const input = req.body.input;
      const language = req.body.language;

      let data = await LanguagePairModel.findOne(query);
      if (data === null) return res.status(404).json({ message: "Not found!" });

      const output = await explainCode(
        input,
        {
          from: data?.name?.split(" To ")[0],
          to: data?.name?.split(" To ")[1],
        },
        language
      );
      return res.status(200).json({ data: output });
    } catch (error) {
      console.error(error);
      return res.status(404).json({ message: "Not found!", error });
    }
  },
};

module.exports = languagePairController;
