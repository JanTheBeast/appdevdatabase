exports.seed = function(knex) {
  return knex('accounts').insert([
    {
      name: "Bob",
      email: "h@a",
      password: 123,
    },
  ]);
};
