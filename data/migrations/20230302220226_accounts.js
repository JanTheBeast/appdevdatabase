exports.up = function(knex) {
    return knex.schema.createTable("accounts", function(accounts) {
        accounts.increments();

        accounts.string("name", 128).notNullable();
        accounts.string("email", 128).notNullable();
        accounts.integer("password").notNullable();
        accounts.unique(["name"]);
        accounts.unique(["email"]);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("accounts");
};
