exports.seed = function(knex) {
  return knex('accounts').insert([
    {
      name: "Bob",
      password: "bobiscool",
    },
  ]);
};
