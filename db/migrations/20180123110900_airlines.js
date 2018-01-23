exports.up = function(knex, Promise) {
  return knex.schema.createTable('airlines', (table) => {
    table.increments();
    table.string('airline_name');
    table.string('airline_description');
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('airlines');
};