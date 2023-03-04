exports.up = function(knex) {
    return knex.schema.createTable("accounts", function(accounts) {
        accounts.increments();

        accounts.string("name", 128).notNullable().unique();
        accounts.string("password", 128).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("accounts");
};
