exports.seed = function(knex) {
  return knex('accounts').insert([
    {
      name: "Anonymous",
      email: "",
      password: -1,
    },
  ]);
};
