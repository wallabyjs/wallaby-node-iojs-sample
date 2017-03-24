'use strict';

let calculator = require('../lib/calculator');
let winston = require('winston');

describe('calculator', () => {

  it('should add numbers', () => {
    winston.verbose(calculator.add(3, 5));
    expect(calculator.add(2, 2)).to.equal(4);
  });
});
