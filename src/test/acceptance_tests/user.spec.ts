import request from 'supertest';
import { app } from '../../server';
import { User } from '../../models/User';

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
      {
        nickname: 'Q00',
        birthday: new Date('1995-03-27'),
        sex: 'male',
        userAccount: {},
        userPushId: '123',
      } as User,
      {
        nickname: 'dahee',
        birthday: new Date('1995-01-27'),
        sex: 'female',
        userAccount: {},
        userPushId: '1234',
      } as User,
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
