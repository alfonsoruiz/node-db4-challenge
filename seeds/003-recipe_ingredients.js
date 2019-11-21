exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    { recipes_id: 1, ingredients_id: 1, qty: 1.1 },
    { recipes_id: 1, ingredients_id: 2, qty: 2.2 },
    { recipes_id: 1, ingredients_id: 3, qty: 3.3 },
    { recipes_id: 1, ingredients_id: 4, qty: 4.4 }
  ]);
};
