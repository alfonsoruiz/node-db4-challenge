exports.seed = function(knex) {
  return knex('recipes').insert([
    { name: 'Pizza', instructions: 'Make Pizza' },
    { name: 'Salad', instructions: 'Make Salad' },
    { name: 'Tacos', instructions: 'Make Tacos' }
  ]);
};
