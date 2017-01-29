// Karma configuration
// Generated on Sat Jan 28 2017 17:10:06 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // listof files / patterns to load in the browser
    files: [
      // angular 1.5.6
      "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js",
      // ng-animate
      "https://code.angularjs.org/1.5.6/angular-animate.min.js",
      // ui-bootstrap 2.4
      "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.4.0/ui-bootstrap.min.js",
      // ui-router 1.0
      "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.0-beta.3/angular-ui-router.js",
      // ng-storage
      "https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js",
      'node_modules/angular-mocks/angular-mocks.js',

      "src/app/root.module.js",
      "src/app/root.component.js",

      "src/app/common/app.module.js",
      "src/app/common/app-storage.service.js",
      "src/app/common/app.component.js",
      "src/app/common/app-nav.component.js",
      "src/app/common/app-sidebar.component.js",

      "src/app/components/components.module.js",

      "src/app/components/activities/activities.module.js",
      "src/app/components/activities/activities.service.js",

      "src/app/components/activities/activities/activities.component.js",
      "src/app/components/activities/activities/activities.controller.js",

      "src/app/components/activities/activity/activity.component.js",
      "src/app/components/activities/activity/activity.controller.js",

      "src/app/components/places/places.module.js",
      "src/app/components/places/places.service.js",
      "src/app/components/places/places.service.geocoder.js",

      "src/app/components/places/place/place.component.js",
      "src/app/components/places/place/place.controller.js",

      "src/app/components/places/places/places.component.js",
      "src/app/components/places/places/places.controller.js",

      "src/app/components/places/places-filters/places-filters.component.js",
      "src/app/components/places/places-filters/places-filters.controller.js",

      "src/app/components/places/places-filter/places-filter.component.js",

      "src/app/components/places/places-search/places-search.component.js",
      "src/app/components/places/places-search/places-search.controller.js",

      "src/app/components/places/places-form/places-form.component.js",
      "src/app/components/places/places-form/places-form.controller.js",

      'src/app/components/places/places.spec.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
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
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
