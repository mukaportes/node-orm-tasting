exports.up = knex => Promise.all([
  knex.schema.withSchema('node_orm').hasTable('country').then((exists) => {
    if (!exists) {
      return knex.schema.withSchema('node_orm').createTable('country', (table) => {
        table
          .uuid('country_uid')
          .comment('Country uuid identifier');

        table
          .string('name')
          .comment('Country name');

        table
          .string('continent_name')
          .comment('Country continent name');

        table
          .primary(['country_uid']);
      });
    }
  }),
]);

exports.down = knex => knex.schema.withSchema('node_orm').dropTableIfExists('country');