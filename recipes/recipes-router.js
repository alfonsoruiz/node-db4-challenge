const express = require('express');
const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error retrieving recipes from db' });
    });
});

router.get('/:id/ingredients', (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(ingredients => {
      res.json(ingredients);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'Error retrieving ingredients for recipe from db' });
    });
});

router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then(instructions => {
      res.json(instructions);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'Error retrieving instructions for recipe from db' });
    });
});

module.exports = router;
