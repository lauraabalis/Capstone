
exports.up = function(knex, Promise) {
  return knex.schema.createTable('launch', function(table) {
    table.increments();
    // table.string('title');
    // table.string('description');
    // table.string('project');
    table.date('date');
    table.string('task');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('launch');
};
