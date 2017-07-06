
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('launch').del()
    .then(function () {
      // Inserts seed entries
      return knex('launch').insert([
        {title: 'rowValue1'},
        {description: 'rowValue2'},
        {project: 'rowValue3'}
      ]);
    });
};
