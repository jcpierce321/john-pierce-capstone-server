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
    });  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("user");  
};
