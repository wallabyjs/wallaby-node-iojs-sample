module.exports = function () {
  return {
    files: [
      'lib/**/*.js',
      'Resources/**/*.json',
      'Resources/**/*.png',
    ],

    tests: [
      'test/**/*Spec.js'
    ],

    setup: function () {
      require.extensions[".png"] = function() {
        return null;
      }
    },

    env: {
      type: 'node',
      runenr: 'node'
    }
  };
};
