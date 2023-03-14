exports.up = function(knex) {
    return knex.schema.createTable("notes", function(notes) {
        notes.increments();

        notes.string("title", 128).notNullable();
        notes.text("message").defaultTo("");

        notes.float("longitude").notNullable();
        notes.float("latitude").notNullable();

        notes.boolean("anonymous").defaultTo(false);
        notes.bigint("time").notNullable();
        notes.integer("group").defaultTo(0);

        notes.integer("reports").defaultTo(0);
        notes.integer("upvotes").defaultTo(0);
        
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
