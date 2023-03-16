const Pokemon = require("../models/pokemonModel");
const Categorie = require("../models/categorieModel");

const mongoose = require("mongoose");

// get all the pokemons

const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    if (pokemons) {
      return res.status(200).json(pokemons);
    } else {
      return res.status(404).json({ message: "No pokemons found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get one pokemon

const getOnePokemon = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No such a pokemon" });
    }
    const { id } = req.params;
    const pokemon = await Pokemon.findById(id);
    return res.status(200).json(pokemon);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// add a pokemon

const addPokemon = async (req, res) => {
  const { name, avatar, speed, attack, defence, categories = [] } = req.body;
  // PS :  categorie is an array of categorie ids ;

  let emptyFields = [];
  if (!name) emptyFields.push("name");
  if (!avatar) emptyFields.push("avatar");
  if (!speed) emptyFields.push("speed");
  if (!attack) emptyFields.push("attack");
  if (!defence) emptyFields.push("defence");
  if (!categories && categories.length == 0) emptyFields.push("categories");
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ message: "Please fill in all the fields", emptyFields });
  }
  try {
    const pokemon = {
      name,
      avatar,
      speed,
      attack,
      defence,
      categories,
    };
    const newPokemon = await Pokemon.create(pokemon);
    return res
      .status(201)
      .json({ message: "Pokemon added successfully", newPokemon });
  } catch {
    return res.status(500).json({ message: error.message });
  }
};

// update a pokemon

const updatePokemon = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const { name, avatar, speed, attack, defence, categorie } = req.body;
  // PS :  categorie is an array of categorie ids ;

  const pokemon = {
    name,
    avatar,
    speed,
    attack,
    defence,
    categories,
  };

  if (!pokemon) return res.status(404).json({ message: "No such pokemon" });
  try {
    const updatedPokemon = await Pokemon.findOneAndUpdate(id, pokemon);
    if (!updatedPokemon)
      return res.status(404).json({ message: "Pokemon not updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// delete a pokemon

const deletePokemon = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such pokemon" });
  }
  try {
    const pokemon = await Pokemon.findById(id);
    if (!pokemon) return res.status(404).json({ message: "No such pokemon" });
    const deletedPokemon = await Pokemon.findByIdAndDelete({ _id: id });
    if (!deletedPokemon)
      return res.status(404).json({ message: "Pokemon not deleted" });
    return res
      .status(200)
      .json({ message: "Pokemon deleted successfully", deletedPokemon });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  deletePokemon,
  getAllPokemons,
  getOnePokemon,
  updatePokemon,
  addPokemon,
};
