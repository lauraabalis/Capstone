
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('launch').del()
    .then(function () {
      // Inserts seed entries
      return knex('launch').insert([
        {date: '2017-07-23', task: "LEAN CANVAS"},
        {date: '2017-08-01', task: "CUSTOMER PROFILES"},
        {date: '2017-09-01', task: "MVP MESSAGING"},
        {date: '2017-09-15', task: "GRAPHICS"},
        {date: '2017-09-17', task: "SOCIAL ACCOUNTS"},
        {date: '2017-09-24', task: "IDENTIFY INFLUENCERS"},
        {date: '2017-09-30', task: "INFLUENCER MESSAGING & COMP"},
        {date: '2017-10-01', task: "TEASER ARTICLE"},
        {date: '2017-10-15', task: 'SIZZLE'},
        {date: '2017-10-31', task: "LANDING PAGE"}
      ]);
    });
};
