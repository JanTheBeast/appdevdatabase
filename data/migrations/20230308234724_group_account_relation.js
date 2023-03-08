exports.up = function(knex) {
    return knex.schema.createTable("groupAccountRelations", function(GARel) {
        GARel.increments();

        GARel
            .integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("accounts")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

        GARel
            .integer("group_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("groups")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("groupAccountRelations");
};

