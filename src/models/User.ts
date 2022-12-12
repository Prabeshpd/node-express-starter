import BaseModel from './Model';
import { toCamelCase } from '../utils/object';
import { CamelCaseKeys } from '../types/utils';

export interface UserModel {
  id: number;
  email: string;
  name: string;
  password: string;
  created_at: string;
  is_active: boolean;
  updated_at: string;
}

export type UserSchema = CamelCaseKeys<UserModel>;
export type UserDetail = Omit<UserSchema, 'password'>;
export type UserPayload = Omit<UserModel, 'id' | 'created_at' | 'updated_at' | 'password'>;

class User extends BaseModel {
  public static table = 'users';

  public static async insertData(data: UserPayload | UserPayload[]) {
    return this.insert<UserPayload | UserPayload[]>(data);
  }

  public static async fetchByEmail(email: string) {
    return this.buildQuery((qb) => qb.select('*').from('users').where('is_active', 1).andWhere('email', email));
  }
}

export default User;
