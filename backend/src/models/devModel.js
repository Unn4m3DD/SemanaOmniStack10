const mongoose = require("mongoose");
const PointSchema = require("./point");
const devSchema = new mongoose.Schema({
  name: String,
  techs: [String],
  gitHubName: String,
  avatarURL: String,
  bio: String,
  geo: {
    type: PointSchema,
    index: "2dsphere"
  }
});
module.exports = mongoose.model("dev", devSchema);
