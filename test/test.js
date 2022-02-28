var request = require('supertest');
var app = require('../lab4.js');

describe('GET /', function() {
  it('respond with found', function(done) {
    request(app).get('/').expect('LS4-app functional 👊😊', done);
  });
});
