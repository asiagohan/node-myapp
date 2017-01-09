
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('tasks', function(table){
      table.increments('id').primary();
      table.string('title');
      table.string('description');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('tasks')
  ])
};
