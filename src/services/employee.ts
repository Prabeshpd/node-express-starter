import Employee, { employeePayload } from '../models/Employee';
import { childLogger } from '../utils/logger';
import { extractPaginationParams, constructPaginationResult, PaginationParams } from '../utils/pagination';

/**
 * Fetch all recommendations for the logged in user with pagination.
 *
 * @param {PaginationParams} params
 * @param {number} userId
 * @returns {RecommendationDetails[]}
 */
export async function fetchEmployee(userId: number, params: PaginationParams) {
  const log = childLogger({ module: 'services/employee' });
  const href = '/api/v1/employees';

  try {
    const { currentPage = 1 } = params;

    const totalEmployees = await Employee.count(userId);

    const { limit, offset } = extractPaginationParams(params);
    const employees = await Employee.fetch(userId, { limit, offset });

    const paginationResult = constructPaginationResult({
      totalCount: totalEmployees,
      limit,
      currentPage,
      href
    });

    return { data: employees, metadata: paginationResult };
  } catch (err: any) {
    log.error(err);

    throw err;
  }
}

export async function create(payload: employeePayload) {
  try {
    const [employee] = await Employee.insertData(payload);

    return employee;
  } catch (err) {
    throw err;
  }
}
