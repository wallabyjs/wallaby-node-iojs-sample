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

      var winston = require('winston');
      if (!winston.transports.ConsoleLogger) {
        var ConsoleLogger = winston.transports.ConsoleLogger = function (options) {
          this.level = 'verbose';
        };
        require('util').inherits(ConsoleLogger, winston.Transport);
        ConsoleLogger.prototype.log = function (level, msg, meta, callback) {
          console.log(msg);
          callback(null, true);
        };
        winston.remove(winston.transports.Console);
        winston.add(winston.transports.ConsoleLogger);
      }

    },

    env: {
      type: 'node',
      runner: 'node'
    }
  };
};
