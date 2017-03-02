'use strict';

let calculator = require('../lib/calculator');

describe('calculator', () => {

  it('should add numbers', () => {
    expect(calculator.add(2, 2)).to.equal(4);
  });
});
