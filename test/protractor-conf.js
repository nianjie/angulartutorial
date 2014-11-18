exports.config = {
  
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
    'phantomjs.cli.args':[''], 
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },

  chromeOnly: false,

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
