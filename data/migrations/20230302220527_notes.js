exports.up = function(knex) {
    return knex.schema.createTable("notes", function(notes) {
        notes.increments();

        notes.string("title", 128).notNullable();
        notes.text("message").defaultTo("");
        notes.float("longitude").notNullable();
        notes.float("latitude").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("notes");
};
