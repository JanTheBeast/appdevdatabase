exports.up = function(knex) {
    return knex.schema.createTable("groups", function(groups) {
        groups.increments();

        groups.string("name", 128).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("groups");
};
