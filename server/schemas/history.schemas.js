const { Schema } = require("mongoose");

// content Schema:
const ContentSchema = new Schema({
  input: {
    type: String,
    required: true,
  },
  output: {
    type: [String],
    required: true,
  },
});

// Main Schema:
const HistorySchema = new Schema({
  lid: {
    // languagePair ID
    type: String,
    required: true,
  },
  uid: {
    // user id
    type: String,
    required: true,
  },
  content: {
    type: ContentSchema,
    required: true,
  },
});

// Response Schemas:
const HistoryResponseSchemas = {
  default(data) {
    if (data instanceof Array) {
      const res = [];
      for (const ele of data) res.push(ele.content);
      return res;
    }
    return {
      input: data.content.input,
      output: data.content.output,
    };
  },
};

module.exports = {
  HistorySchema,
  HistoryResponseSchemas,
};
