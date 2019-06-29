exports.up = function (knex) {
  return knex.schema.createSchema('node_orm');
};

exports.down = function (knex) {
  return knex.schema.dropSchema('node_orm');
};