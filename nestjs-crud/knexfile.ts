// eslint-disable-next-line @typescript-eslint/no-var-requires
import path from 'path';

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    config: {
      client: process.env.MYSQL_CLIENT,
      connection: {
        host: process.env.MYSQL_HOST,
        // port : Number(process.env.MYSQL_PORT),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      },
    },
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  useNullAsDefault: true,
};
