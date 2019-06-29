exports.up = knex => Promise.all([
  knex.schema.withSchema('node_orm').hasTable('user').then((exists) => {
    if (!exists) {
      return knex.schema.withSchema('node_orm').createTable('user', (table) => {
        table
          .uuid('user_uid')
          .comment('User uuid identifier');

        table
          .string('full_name')
          .comment('User full name');

        table
          .string('email')
          .comment('User email');

        table
          .string('gender')
          .comment('User gender');

        table
          .timestamp('date_of_birth')
          .comment('User date of birth');

        table
          .timestamp('created_at')
          .comment('User creation date');

        table
          .uuid('country_uid')
          .comment('Country uid related to the user');

        table
          .primary(['user_uid']);

        table
          .unique(['email']);

        table
          .foreign(['country_uid'], 'user_country_fkey')
          .references(['country_uid'])
          .inTable('node_orm.country')
          .onDelete('CASCADE')
          .onUpdate('RESTRICT')
      });
    }
  }),
]);

exports.down = knex => knex.schema.withSchema('node_orm').dropTableIfExists('user');