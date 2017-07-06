
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {lastName: 'rowValue1'},
        {firstName: 'rowValue2'},
        {email: 'rowValue3'},
        {mobile: 'rowValue4'},
        {role: 'rowValue5'},
        {launch: 'rowValue6'}
      ]);
    });
};
