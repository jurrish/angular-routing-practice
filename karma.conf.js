// Karma configuration
// Generated on Wed May 24 2017 12:36:21 GMT-0700 (PDT)
// TODO : load in the webpack config and add it to the karma conf object
const webpack = require('./webpack.config.js');
//TODO : delete entry point because karma replaces the entry poit to the entry points to our tests and everything we wawnt it to load OR set it to an empty object
//webpack.entry = {};
delete webpack.entry;

//TODO: tell it to run our code through webpack so it'll become es5 code (so we can use require statements!!!) so we run it through webpack first so we can use require(chai), etc cuz karma doesn't know what that syntax is.

module.exports = function(config) {
  config.set({
    //TODO: set a key value of webpack since we required it in! webpack so karma object knows what it is!
    webpack: webpack,
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    browserConsoleLogOptions: {
      level: 'log' //or 'log'
    },
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],
    // list of files / patterns to load in the browser
    files: [
      'app/entry.js',
      'test/**/*-test.js'
    ],
    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    //TODO: run our files through webpack first!
    preprocessors: {
      'app/entry.js': ['webpack'],
      'test/**/*-test.js': ['webpack'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
