const { Schema } = require("mongoose");

// Main Schema:
const UserSchema = new Schema({
  uid: {
    // unique user id
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

// Response Schemas:
const UserResponseSchemas = {
  default(data) {
    // if list of items:
    if (data instanceof Array) {
      const res = [];
      for (const ele of data)
        res.push({
          uid: ele.uid,
          name: ele.name,
        });
      return res;
    }

    // one item:
    return {
      uid: data.uid,
      name: data.name,
    };
  },
};

module.exports = { UserSchema, UserResponseSchemas };
