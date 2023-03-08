exports.seed = function(knex) {
    return knex('groups').insert([
      {
        name: "ChaosSplatter",
      },
    ]);
  };
  