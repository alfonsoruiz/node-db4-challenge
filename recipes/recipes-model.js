const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

// should return a list of all recipes in the database
function getRecipes() {
  return db('recipes');
}

//should return a list of all ingredients and quantities for a given recipe
function getShoppingList(id) {
  return db('recipes')
    .select('ingredients.name', 'recipe_ingredients.qty')
    .join(
      'recipe_ingredients',
      'recipes.id',
      '=',
      'recipe_ingredients.recipes_id'
    )
    .join(
      'ingredients',
      'ingredients.id',
      '=',
      'recipe_ingredients.ingredients_id'
    )
    .where('recipes.id', '=', id);
}

// should return a list of step by step instructions for preparing a recipe
function getInstructions(id) {
  return db('recipes')
    .select('instructions')
    .where({ id });
}
