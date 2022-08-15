/* eslint-disable no-unused-vars */
import request from 'supertest';
import { assert } from 'chai';
import api from '../src/index';

describe('Integration Test: GET - API Register-Employees', () => {
  const statusOk = 200;
  const statusNotFound = 404;
  it('should return a response with not found status', (done) => {
    request(api)
      .get('/employees')
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, statusOk);
        done();
      });
  });
  it('should return a response with not found status filtered by name', (done) => {
    request(api)
      .get('/employees?name=empolyees')
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, statusNotFound);
        assert.equal(res.text, 'Not Found');
        done();
      });
  });
  it('should return a response with not found status filtered by address', (done) => {
    request(api)
      .get('/employees?address=morada')
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, statusNotFound);
        assert.equal(res.text, 'Not Found');
        done();
      });
  });
});
