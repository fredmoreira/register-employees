/* eslint-disable no-unused-vars */
import request from 'supertest';
import { assert } from 'chai';
import mongoose from 'mongoose';
import database from '../src/commons/db/data-base';
import api from '../src/index';

describe('Test GET API PhoneBook', () => {
  const statusOk = 200;
  it('test contacts', () => {
    request(api)
      .get('/employees/')
      .send()
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, statusOk);
        assert.equal(res.body[0].name, 'TesterPortoMeetup');
        assert.equal(res.body[0].nif, '999888777');
        assert.equal(res.body[0].address, 'MTP');
      });
  });
});
