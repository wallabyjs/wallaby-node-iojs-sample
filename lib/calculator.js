'use strict';

class Calculator {
  constructor() {
  }

  add(a, b) {
    return a + b;
  }
}

// Replace the ES2015 code above with the following if you're not using ES2015

//function Calculator() {
//  this.add = function (a, b) {
//    return a + b;
//  }
//}

module.exports = new Calculator();