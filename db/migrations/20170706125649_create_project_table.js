
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', function(table) {
    table.increments();
    table.string('title');
    table.string('description');
    table.string('projectTask');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('project');
};
