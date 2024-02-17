const { Schema } = require("mongoose");

// Main Schema:
const LanguagePairSchema = new Schema({
  lid: {
    // languagePair ID
    type: String,
    required: true,
    unique: true,
  },
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

// Response Schemas:
const LanguagePairResponseSchemas = {
  default(data) {
    // if list of items:
    if (data instanceof Array) {
      const res = [];
      for (const ele of data)
        res.push({
          lid: ele.lid,
          name: ele.name,
        });
      return res;
    }

    // one item:
    return {
      lid: data.lid,
      name: data.name,
    };
  },
};

module.exports = { LanguagePairSchema, LanguagePairResponseSchemas };
