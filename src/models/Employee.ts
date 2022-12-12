import { Knex } from 'knex';

import BaseModel from './Model';
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
export type employeePayload = Omit<EmployeeModel, 'id' | 'created_at' | 'updated_at'>;

class Employee extends BaseModel {
  public static table = 'employees';

  /**
   * Count total employee for a user.
   *
   * @param {number} user_id
   * @returns {Promise<number>}
   */
  public static async count(user_id: number): Promise<number> {
    const [{ count }] = await this.buildQuery<{ count: number }>((qb: Knex) =>
      qb.count('id as count').from(this.table).where('is_active', true).and.where('user_id', user_id)
    );

    return count;
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

    return this.buildQuery<EmployeeSchema>((qb) =>
      qb.select().from(this.table).limit(limit).offset(offset).where('is_active', 1).and.where('user_id', user_id)
    );
  }

  /**
   * Creates Employee for a user.
   * @param {employeePayload | employeePayload[]} data
   * @returns
   */
  public static async insertData(data: employeePayload | employeePayload[]) {
    return this.insert<employeePayload | employeePayload[]>(data);
  }
}

export default Employee;
