exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments(); // Primary key
      tbl.string('name').notNullable();
      tbl.string('instructions').notNullable();
    })

    .createTable('ingredients', tbl => {
      tbl.increments(); //Primary key
      tbl.string('name').notNullable();
    })

    .createTable('recipe_ingredients', tbl => {
      tbl.increments(); //Primary key
      tbl.real('qty');

      tbl
        .integer('recipes_id') // Foreign Key
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl
        .integer('ingredients_id') //Foreign Key
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  // Tables need to get dropped in reverse order of creation when using foreign keys
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
