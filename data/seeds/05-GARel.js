exports.seed = function(knex) {
    return knex('groupAccountRelations').insert([
      {
        user_id: 1,
        group_id: 1,
      },
    ]);
  };
  