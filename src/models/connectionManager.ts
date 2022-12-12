import { Knex } from 'knex';

import * as db from '../utils/db';
import logger from '../utils/logger';
import config from '../config';

/**
 * Creates a database instance for database.
 *
 * @returns {Knex}
 */
export function getDatabaseConnection(): Knex {
  const dbConfig = {
    client: 'mssql',
    connection: { ...config.database }
  };

  logger.info('Resolving database connection pool for database');

  return db.createInstance(dbConfig);
}
