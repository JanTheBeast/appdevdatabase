exports.seed = function(knex) {
    return knex('comments').insert([
        {
          note_id: 1,
          user_id: 1,
          username: "Anonymous",
          text: "Very nice",
        },
        {
          note_id: 1,
          user_id: 1,
          username: "Anonymous",
          text: "Very very nice",
        },
        {
          note_id: 1,
          user_id: 1,
          username: "Anonymous",
          text: "Very very very nice",
        },
      ]);
};