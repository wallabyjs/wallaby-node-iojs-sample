module.exports = function () {
  return {
    files: [
      'lib/**/*.js'
    ],

    tests: [
      'test/**/*Spec.js'
    ],

    bootstrap: function () {
      global.expect = require('chai').expect;
    },

    env: {
      type: 'node'
      // More options are described here
      // http://wallabyjs.com/docs/integration/node.html
    }
  };
};