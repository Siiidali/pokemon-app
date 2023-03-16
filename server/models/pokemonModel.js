const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  defence: {
    type: Number,
    required: true,
  },
  attack: {
    type: Number,
    required: true,
  },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Categorie" }],
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
