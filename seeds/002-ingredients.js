exports.seed = function(knex) {
  return knex('ingredients').insert([
    { name: 'Mushrooms' },
    { name: 'Jalapenos' },
    { name: 'Sun Dried Tomatos' },
    { name: 'Pineapple' },
    { name: 'Tortilla' },
    { name: 'Kale' },
    { name: 'Tomato' },
    { name: 'Soyrizo' },
    { name: 'Beans' },
    { name: 'Salsa Verde' },
    { name: 'Balsamic Vinegrette' }
  ]);
};
