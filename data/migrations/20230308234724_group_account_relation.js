exports.up = function(knex) {
    return knex.schema.createTable("groupAccountRelations", function(GARel) {
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

        GARel.unique(['user_id', 'group_id']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("groupAccountRelations");
};

