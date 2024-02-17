const { Schema } = require("mongoose");

// Main Schema:
const LanguagePairSchema = new Schema({
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
          _id: ele._id,
          name: ele.name,
        });
      return res;
    }

    // one item:
    return {
      _id: data._id,
      name: data.name,
    };
  },
};

module.exports = { LanguagePairSchema, LanguagePairResponseSchemas };
