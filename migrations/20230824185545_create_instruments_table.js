/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("instrument", function(table) {
        table.increments("id");
        table.boolean("flute").notNullable();
        table.boolean("piccolo").notNullable();
        table.boolean("oboe").notNullable();
        table.boolean("bassoon").notNullable();
        table.boolean("clarinetBb").notNullable();
        table.boolean("clarinetEb").notNullable();
        table.boolean("saxAlto").notNullable();
        table.boolean("saxTenor").notNullable();
        table.boolean("saxBaritone").notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table
            .integer("user_id")
            .unsigned()
            .references("user.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");

  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('instruments');
  
};
