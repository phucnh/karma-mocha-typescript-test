// Karma configuration
// Generated on Sun May 27 2018 14:53:30 GMT+0900 (JST)

module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['mocha', 'karma-typescript'],
    files: [
      'src/typescript/*.ts',
      'test/typescript/*.spec.ts',
    ],
    exclude: [],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  });
};
