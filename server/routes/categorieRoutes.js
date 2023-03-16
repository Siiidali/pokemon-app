const express = require("express");
const categorieControllers = require("../controllers/categorieControllers");
const router = express.Router();

router.get("/", categorieControllers.getAllCategories);
router.get("/:id", categorieControllers.getOneCategorie);
router.post("/", categorieControllers.addCategorie);
router.put("/:id", categorieControllers.updateCategorie);
router.delete("/:id", categorieControllers.deleteCategorie);

module.exports = router;
