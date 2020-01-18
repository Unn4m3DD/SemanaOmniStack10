const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://user:user@cluster0-qfsei.mongodb.net/Cluster0?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
module.exports = mongoose.connection;
