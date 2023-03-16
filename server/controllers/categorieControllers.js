const Categorie = require("../models/categorieModel");

// get all the categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.find();
    if (categories) {
      return res.status(200).json(categories);
    } else {
      return res.status(404).json({ message: "No categories found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get one category
const getOneCategorie = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No such category" });
    }
    const category = await Categorie.findById(id);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// add a category
const addCategorie = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ message: "Please provide a name for the category" });
  }
  try {
    const category = await Categorie.create({ name });
    return res
      .status(201)
      .json({ message: "Category added successfully", category });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// update a category
const updateCategorie = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such category" });
  }
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Please provide a name" });
  }
  try {
    const updatedCategory = await Categorie.findByIdAndUpdate(id, {
      name,
    });
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res
      .status(200)
      .json({ message: "Category updated successfully", updatedCategory });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// delete a category
const deleteCategorie = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such category" });
  }
  try {
    const category = await Categorie.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: "Category not deleted" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  deleteCategorie,
  getAllCategories,
  getOneCategorie,
  updateCategorie,
  addCategorie,
};
