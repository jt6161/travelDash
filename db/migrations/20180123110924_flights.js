exports.up = function(knex, Promise) {
  return knex.schema.createTable('flights', (table) => {
    table.increments();
    table.string('start');
    table.string('destination');
    table.integer('airline_id').references('id').inTable('airlines').notNullable().onDelete('cascade');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('flights');
};