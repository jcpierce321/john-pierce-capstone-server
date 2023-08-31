/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("users", function(table) {
      table.increments("user_id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("telephone").notNullable();
      table.string("city").notNullable();
      table.string("website_url").notNullable();
      table.string("primary_inst").notNullable();
      table.boolean("flute").notNullable().defaultTo(false);
      table.boolean("piccolo").notNullable().defaultTo(false);
      table.boolean("oboe").notNullable().defaultTo(false);
      table.boolean("bassoon").notNullable().defaultTo(false);
      table.boolean("clarinetBb").notNullable().defaultTo(false);
      table.boolean("clarinetEb").notNullable().defaultTo(false);
      table.boolean("saxAlto").notNullable().defaultTo(false);
      table.boolean("saxTenor").notNullable().defaultTo(false);
      table.boolean("saxBaritone").notNullable().defaultTo(false);
      table.timestamps(true, true);
  });
};

exports.down = async function(knex) {

  await knex.schema.dropTableIfExists("users");
};