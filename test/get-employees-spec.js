/* eslint-disable no-unused-vars */
import request from 'supertest';
import { assert } from 'chai';
import mongoose from 'mongoose';
import database from '../src/commons/db/data-base';
import api from '../src/index';

describe('Integration Test: GET - API Register-Employees', () => {
  const statusOk = 200;
  const statusNotFound = 404;
  it('should return an employee tester porto meetup', (done) => {
    request(api)
      .get('http://localhost:5000/employees')
      .end((err, res) => {
        assert.isNull(err);
        console.log(res);
        assert.equal(res.status, statusOk);
        assert.equal(res.body[0].name, 'TesterPortoMeetup');
        assert.equal(res.body[0].nif, '999888777');
        assert.equal(res.body[0].address, 'MTP');
        done();
      });
  });
  it('should return an employee tester porto meetup filtered by name', (done) => {
    request(api)
      .get('/employees?name=TesterPortoMeetup')
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, statusOk);
        assert.equal(res.body[0].name, 'TesterPortoMeetup');
        assert.equal(res.body[0].nif, '999888777');
        assert.equal(res.body[0].address, 'MTP');
        done();
      });
  });
  it('should return an employee tester porto meetup filtered by address', (done) => {
    request(api)
      .get('/employees?address=MTP')
      .send()
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, statusOk);
        assert.equal(res.body[0].name, 'TesterPortoMeetup');
        assert.equal(res.body[0].nif, '999888777');
        assert.equal(res.body[0].address, 'MTP');
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
