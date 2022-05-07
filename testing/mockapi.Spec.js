const supertest = require('supertest');
const express = require('express');

const app = require('../index');

const req = supertest(app);

describe('Test endpoint responses', () => {
  it('gets list of repositories endpoint', async () => {
    const response = await req.get('/list');

    const langs = Object.keys(response.body);

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
    expect(response.body[langs[0]].count).toBeDefined();
    expect(response.body[langs[0]].repos).toBeDefined();
  });
});
