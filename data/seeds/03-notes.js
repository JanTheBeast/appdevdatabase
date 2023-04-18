exports.seed = function (knex) {

    // Insert some standard notes for testing
    return knex('notes').insert([
        {
            title: "Free cookies",
            message: "Free cookies at subway!",
            latitude: 51.448004,
            longitude: 5.4844645,
            anonymous: true,
            time: 1678827951,
            group_id: 1,
            user_id: 1,
            username: "Anonymous",
            upvotes: 20,
            reports: 0,
        },
        {
            title: "Expensive cookies",
            message: "Expensive cookies at subway!",
            latitude: 51.44798,
            longitude: 5.48467,
            anonymous: true,
            time: 1678827951,
            group_id: 1,
            user_id: 1,
            username: "Anonymous",
            reports: 14,
            upvotes: 0,
        },
    ]);
};
