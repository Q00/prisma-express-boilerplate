import request from 'supertest';
import { app } from '../../server';

describe('GET /routines', () => {
  it('SHOULD return 200Ok', (done) => {
    request(app)
      .get('/routines')
      .end((_, res) => {
        expect(res.status).toBe(200);
        done();
      });
  });
});
