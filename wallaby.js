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

      var mocha = wallaby.testFramework;

      // setup sinon hooks
      var sinon = require('sinon');
      mocha.suite.beforeEach('sinon before', function() {
        if (null == this.sinon) {
          this.sinon = sinon.sandbox.create();
        }
      });
      mocha.suite.afterEach('sinon after', function() {
        if (this.sinon && 'function' === typeof this.sinon.restore) {
          this.sinon.restore();
        }
      });
    },

    env: {
      type: 'node',
      runner: 'node'
    }
  };
};
