/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("user", function(table) {
        table.increments("id");
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("telephone").notNullable();
        table.string("city").notNullable();
        table.string("website_url").notNullable();
        table.string("primary_instrument").notNullable();
        exports.up = function(knex) {
            return knex.schema.table('instruments', function(table) {
              table.integer('user_id').unsigned();
              table.foreign('user_id').references('users.id');
            });
          };
          
          exports.down = function(knex) {
            return knex.schema.table('instruments', function(table) {
              table.dropForeign('user_id');
              table.dropColumn('user_id');
            });
          };
    });  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("user");  
};
