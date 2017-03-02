module.exports = function () {
  return {
    files: [
      'lib/**/*.js'
    ],

    tests: [
      'test/**/*Spec.js'
    ],

    setup: function () {
      global.expect = require('chai').expect;
    },

    env: {
      type: 'node',
      runner: 'node'
    }
  };
};
