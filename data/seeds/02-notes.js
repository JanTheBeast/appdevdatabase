exports.seed = function(knex) {
  return knex('notes').insert([
    {
      title: "Free cookies",
      message: "Free cookies at subway!",
      latitude: 51.448004,
      longitude: 5.4844645,
      anonymous: true,
      time: "2009-06-18T16:44:20+0000",
      user_id: 1,
    },
  ]);
};
