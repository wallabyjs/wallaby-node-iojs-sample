'use strict';

let expect = require('expect');
let calculator = require('../lib/calculator');

describe('calculator', () => {

  it('should add numbers', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
});