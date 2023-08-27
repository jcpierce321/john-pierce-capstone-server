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
