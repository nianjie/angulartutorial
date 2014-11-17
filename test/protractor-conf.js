exports.config = {
  
  seleniumArgs: ['-log selenium.log'],

  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
    'phantomjs.cli.args':['--logfile=phantomjs.log', '--loglevel=DEBUG', '--proxy=proxy.jmas.co.jp:8080'],
    'phantomjs.ghostdriver.cli.args': ['--logfile=phantomjs.log', '--loglevel=DEBUG', '--proxy=proxy.jmas.co.jp:8080']
  },

  chromeOnly: false,

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
