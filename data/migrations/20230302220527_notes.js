exports.up = function(knex) {
    return knex.schema.createTable("notes", function(notes) {
        notes.increments();

        notes.string("title", 128).notNullable();
        notes.text("message").defaultTo("");
        notes.float("longitude").notNullable();
        notes.float("latitude").notNullable();
        notes.boolean("anonymous");
        notes.datetime("time").notNullable();
        
        notes.integer("group");

        notes
            .integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("accounts")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("notes");
};
