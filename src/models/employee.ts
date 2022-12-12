import { Knex, knex } from 'knex';

import { CamelCaseKeys } from '../types/utils';
import { toCamelCase } from '../utils/object';

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

  public static async getAll(id: number): Promise<EmployeeSchema[]> {
    const data = (await db.select('*').from('employees').whereIn('user_id', [id])) as EmployeeSchema[];

    return data;
  }

  public static async insertData(data: employeePayload): Promise<EmployeeSchema[]> {
    const result = await db.insert(data).into(this.table).returning('*');

    return toCamelCase(result);
  }
}

export default Employee;
