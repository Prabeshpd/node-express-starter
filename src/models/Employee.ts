import { Knex, knex } from 'knex';

import { toCamelCase } from '../utils/object';
import { CamelCaseKeys } from '../types/utils';
import { PaginationQueryParams } from '../utils/pagination';

export interface EmployeeModel {
  id: number;
  name: string;
  user_id: number;
  email: string;
  is_active: boolean;
  hire_date: string;
  created_at: string;
  updated_at: string;
}

export type EmployeeSchema = CamelCaseKeys<EmployeeModel>;
export type employeePayload = Omit<EmployeeSchema, 'id' | 'createdAt' | 'updatedAt'>;

const dbConfig = {
  client: 'mssql',
  connection: {
    server: 'localhost',
    port: 1433,
    user: 'sa',
    database: 'invenco',
    password: 'Admin@1234'
  }
};

const db: Knex = knex(dbConfig);

class Employee {
  public static table = 'employees';

  /**
   * Count total employee for a user.
   *
   * @param {number} user_id
   * @returns {Promise<number>}
   */
  public static async count(user_id: number): Promise<number> {
    const [count] = await db
      .count('id as count')
      .from(this.table)
      .where('is_active', true)
      .and.where('user_id', user_id);

    return +count;
  }

  /**
   * Fetch employee for a user.
   *
   * @param {PaginationQueryParams} paginationParams
   * @param {number} user_id
   * @returns {Promise<employeePayload[]>}
   */
  public static async fetch(user_id: number, paginationParams: PaginationQueryParams) {
    const { limit, offset } = paginationParams;

    return db.select().from(this.table).limit(limit).offset(offset).where('is_active', 1).and.where('user_id', user_id);
  }

  public static async insertData(data: employeePayload): Promise<EmployeeSchema[]> {
    const result = await db.insert(data).into(this.table).returning('*');

    return toCamelCase(result);
  }
}

export default Employee;
