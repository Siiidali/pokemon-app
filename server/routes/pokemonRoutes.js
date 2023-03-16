const express = require("express");
const pokemonControllers = require("../controllers/pokemonControllers");
const router = express.Router();

router.get("/", pokemonControllers.getAllPokemons);
router.get("/:id", pokemonControllers.getOnePokemon);
router.post("/", pokemonControllers.addPokemon);
router.put("/:id", pokemonControllers.updatePokemon);
router.delete("/:id", pokemonControllers.deletePokemon);

module.exports = router;
