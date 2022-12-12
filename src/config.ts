import dotenv from 'dotenv';

interface Configuration {
  env: string;
  port: string | number;
  secret: string;
  cors: {
    whitelist: string[];
  };
  logger: {
    prettyPrint: boolean;
  };
  auth: {
    saltRounds: string;
    refreshTokenSecret: string;
    refreshTokenDuration: string;
    accessTokenDuration: string;
    accessTokenSecret: string;
  };
  database: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
  redis: {
    port: number;
    host: string;
    namespace: string;
    password: string;
  };
}

dotenv.config();

const config: Configuration = {
  secret: process.env.SECRET_KEY || '',
  env: process.env.ENV || 'local',
  port: process.env.EXPRESS_PORT || '3000',
  cors: {
    whitelist: ['/^localhost$/']
  },
  logger: {
    prettyPrint: process.env.ENV !== 'production'
  },
  auth: {
    saltRounds: '11',
    accessTokenSecret: process.env.AUTH_ACCESS_TOKEN_SECRET || 'ENTER_ACCESS_TOKEN_SALT_HERE',
    refreshTokenSecret: process.env.AUTH_REFRESH_TOKEN_SECRET || 'ENTER_REFRESH_TOKEN_SALT_HERE',
    accessTokenDuration: process.env.AUTH_ACCESS_TOKEN_DURATION || '300000',
    refreshTokenDuration: process.env.AUTH_REFRESH_TOKEN_DURATION || '86400000'
  },
  database: {
    host: process.env.DB_HOST || '',
    port: (process.env.DB_PORT && +process.env.DB_PORT) || 1433,
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || ''
  },
  redis: {
    port: +(process.env.REDIS_PORT || 6379),
    host: process.env.REDIS_HOST || '127.0.0.1',
    namespace: process.env.REDIS_NAMESPACE || '',
    password: process.env.REDIS_PASSWORD || ''
  }
};

export default config;
