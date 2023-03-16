const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
  name: {
    type: String,
    rrequired: true,
  },
});

module.exports = mongoose.model("Categorie", categorieSchema);
