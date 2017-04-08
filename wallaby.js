module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'config/**',instrument: false, load: true, ignore: false},
      {pattern: 'config/passport.js',instrument: false, load: true, ignore: false},
      {pattern: 'app.js', load: true, ignore: false},
      {pattern: 'server.js', instrument: false,load: false, ignore: false},
      {pattern: 'lib/**', load: true, ignore: false},
      {pattern: 'routes/**/**/**/**', load: true, ignore: false},
      {pattern: 'models/**/**', instrumented: false, load: true, ignore: false}
    ],

    tests: [
      'test/api/auditlog.spec.js'

    ],

    testFramework: 'jasmine@2.3.4',

    workers: {
      initial: 1,
      regular: 1,
      recycle: true
    },
    hints: {
      ignoreCoverage: /ignore coverage/
    },
    // delays: {
    //     edit: 500,
    //     run: 150
    // },
    setup: function () {
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
        winston.add = winston.remove = function () {

        };
      }

    },
    debug: true,
    // TypeScript compiler is on by default with default the options,
    // you can configure the built-in compiler by passing options to it.
    // See interface CompilerOptions in
    // https://github.com/Microsoft/TypeScript/blob/master/src/compiler/types.ts
    // compilers: {
    //'**/*.ts': wallaby.compilers.typeScript({}),
    env: {
      // use 'node' type to use node.js
      type: 'node',
      runner: 'node'

    }
  };
};