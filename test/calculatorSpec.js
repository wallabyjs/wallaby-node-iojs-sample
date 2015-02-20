'use strict';

let expect = require('expect');
let calculator = require('../lib/calculator');

// Remove arrow functions if you're not using ES2015

describe('calculator', () => {

  it('should add numbers', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
});