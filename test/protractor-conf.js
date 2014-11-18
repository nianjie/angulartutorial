exports.config = {
  
  seleniumArgs: ['-log selenium.log'],

  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
    'phantomjs.cli.args':['--logfile=phantomjs.log', '--loglevel=DEBUG'],
    'phantomjs.ghostdriver.cli.args': ['--logfile=phantomjs.log', '--loglevel=DEBUG']
  },

  chromeOnly: false,

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
