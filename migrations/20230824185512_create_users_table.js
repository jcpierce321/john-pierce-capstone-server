/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("users", function(table) {
      table.increments("id");
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("telephone").notNullable();
      table.string("city").notNullable();
      table.string("website_url").notNullable();
      table.string("primary_inst").notNullable();
  });

  await knex.schema.table('instruments', function(table) {
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('instruments', function(table) {
      table.dropForeign('user_id');
      table.dropColumn('user_id');
  });

  await knex.schema.dropTableIfExists("users");
};