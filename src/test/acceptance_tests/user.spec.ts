import request from 'supertest';
import { app } from '../../server';

describe('GET /users', () => {
  it('SHOULD return 200Ok', (done) => {
    request(app)
      .get('/user')
      .end((_, res) => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('SHOULD return list of 2 users WHEN db containes 2 users', async (done) => {
    const users = [
      new User('Q00', new Date('1995-03-27'), 'male', null, null),
      new User('dahee', new Date('1995-01-27'), 'female', null, null),
    ];
    await db.createArticle(users[0]);
    await db.createArticle(users[1]);
    request(app)
      .get('/users')
      .end((_, res) => {
        expect(res.body).toEqual(users);
        done();
      });
  });
});
