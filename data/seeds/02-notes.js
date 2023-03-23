exports.seed = function(knex) {
  return knex('notes').insert([
    {
      title: "Free cookies",
      message: "Free cookies at subway!",
      latitude: 51.448004,
      longitude: 5.4844645,
      anonymous: true,
      time: 1678827951,
      user_id: 1,
    },
  ]);
};
