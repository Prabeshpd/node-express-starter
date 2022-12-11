import { Knex, knex } from 'knex';

import { toCamelCase } from '../utils/object';
import { CamelCaseKeys } from '../types/utils';

export interface UserModel {
  id: number;
  email: string;
  password: string;
  created_at: string;
  is_active: boolean;
  updated_at: string;
}

export type UserSchema = CamelCaseKeys<UserModel>;
export type UserDetail = Omit<UserSchema, 'password'>;
export type UserPayload = Omit<UserSchema, 'id' | 'createdAt' | 'updatedAt'>;

const dbConfig = {
  client: 'mssql',
  connection: {
    server: 'localhost',
    port: 1433,
    user: 'sa',
    database: 'beer',
    password: 'Admin@1234'
  }
};

const db: Knex = knex(dbConfig);

class User {
  public static table = 'users';

  public static async getAll() {
    return db.select('*').from('users');
  }

  public static async insertData(data: UserPayload) {
    const result = await db.insert(data).into(this.table).returning('*');

    return result;
  }

  public static async fetchByEmail(email: string): Promise<UserSchema | null> {
    const [userData] = await db.select('*').from('users').where('is_active', 1).andWhere('email', email);

    if (!userData) {
      return null;
    }

    return {
      ...toCamelCase(userData)
    } as UserSchema;
  }
}

export default User;
