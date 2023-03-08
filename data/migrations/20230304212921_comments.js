exports.up = function(knex) {
    return knex.schema.createTable("comments", function(comments) {
        comments.increments();

        comments
            .integer("note_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("notes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

        comments
            .integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("accounts")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

        comments.text("text").notNullable();
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("comments");
};
