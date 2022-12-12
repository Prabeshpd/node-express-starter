import { expect } from 'chai';
import request from 'supertest';

import * as jwt from '../../src/utils/jwt';
import { insert, get } from '../../src/utils/db';
import { USER_DATA } from '../fixtures/user';
import app, { server } from '../../src/server';
import { UserDetail } from '../../src/models/User';
import { getTestDatabaseConnection } from '../../src/utils/testConnection';

describe('Employee api test', () => {
  let connection: any;
  let token: string;

  before(async () => {
    connection = getTestDatabaseConnection();
    await insert(connection, 'users', USER_DATA);

    let user = (await get(connection, 'users', { email: 'random_jude@gmail.com' })) as UserDetail;
    token = await jwt.generateAccessToken(user);
    token = `Bearer ${token}`;
  });

  it('should create the employee', (done) => {
    request(app)
      .post('/api/v1/employees')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .send({ email: 'random_jude@gmail.com', name: 'random jude', hire_date: '2022-10-20' })
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.name).to.be.equal('random jude');
        done();
      });
  });

  after(async () => {
    await connection.delete().from('employees');
    await connection.delete().from('users');

    server.close();
  });
});
