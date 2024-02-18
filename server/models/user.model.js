const mongoose = require("mongoose");
const { UserSchema } = require("../schemas/user.schemas");
const userModel = new mongoose.model("User", UserSchema);

module.exports = userModel;
