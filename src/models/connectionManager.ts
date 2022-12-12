import { Knex } from 'knex';

import * as db from '../utils/db';
import logger from '../utils/logger';
import config from '../config';

const processEnv = config.env;

/**
 * Creates a database instance for database.
 *
 * @returns {Knex}
 */
export function getDatabaseConnection(): Knex {
  const dbConfig = {
    client: 'mssql',
    connection: { ...config.database[processEnv] }
  };

  logger.info('Resolving database connection pool for database');

  return db.createInstance(dbConfig);
}
