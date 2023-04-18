exports.seed = function(knex) {

    // Insert some standard comments for testing
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