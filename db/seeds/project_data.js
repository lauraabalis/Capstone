
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {title: 'rowValue1'},
        {description: 'rowValue2'},
        {projectTask: 'rowValue3'}
      ]);
    });
};
