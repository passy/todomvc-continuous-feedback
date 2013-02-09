// Testacular configuration for End to End testing

// base path, that will be used to resolve files and exclude
basePath = '';

// list of files / patterns to load in the browser
files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/end2end/**/*.js'
];

// list of files to exclude
exclude = [
  
];

// test results reporter to use
reporters = ['dots', 'coverage', 'junit'];
junitReporter = {
	outputFile: 'test-results.xml'
};

// where the testacular files are mapped to
urlRoot = '/__testacular/';

// map urls used in test scenarios [ eg: browser().navigateTo('/index.html'); ] to this web server
proxies = {
  '/': 'http://localhost:3501/'
};

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = ['Chrome'];

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;



