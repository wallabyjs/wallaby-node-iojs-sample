module.exports = function (wallaby) {

  var path = require('path');
  process.env.NODE_PATH += path.delimiter
    + path.join(wallaby.localProjectDir, 'lib/node_modules');

  return {
    files: [
      'lib/*.js'
    ],

    tests: [
      'test/**/*Spec.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    }
  };
};
