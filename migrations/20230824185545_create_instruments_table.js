/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("user", function(table) {
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
        table
            .foreign("id")
            .references("users.id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")

  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('instruments');
  
};
