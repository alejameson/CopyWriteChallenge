/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../src/app')


const agent = session(app);

describe('Text route', () => {
  describe('GET /iecho?text=tset', () => {
    it('should get 200', (done) => {
      agent.get('/iecho?text=tset').expect(200)
      done()
    });
  });
});