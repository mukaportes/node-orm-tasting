exports.up = knex => Promise.all([
  knex.schema.withSchema('node_orm').hasTable('user').then((exists) => {
    if (!exists) {
      return knex.schema.withSchema('node_orm').createTable('user', (table) => {
        table
          .uuid('auth_uid')
          .comment('Auth uuid identifier');

        table
          .string('user_uid')
          .comment('User uuid related to the Auth');

        table
          .string('hash')
          .comment('Auth hash');

        table
          .string('salt')
          .comment('Auth salt');

        table
          .timestamp('refresh_token')
          .comment('Auth refresh token');

        table
          .primary(['auth_uid']);

        table
          .foreign(['user_uid'], 'auth_user_fkey')
          .references(['user_uid'])
          .inTable('node_orm.user')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
      });
    }
  }),
]);

exports.down = knex => knex.schema.withSchema('auditor_mercurio').dropTableIfExists('usuario');