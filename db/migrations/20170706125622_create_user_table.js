
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.string('lastName');
    table.string('firstName');
    table.string('email');
    table.string('mobile');
    table.string('role');
    table.string('launch');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
