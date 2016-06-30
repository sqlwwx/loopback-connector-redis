'use strict';

describe.skip('redis imported features', function() {
  before(function() {
    require('./init.js');
  });

  require('loopback-datasource-juggler/test/basic-querying.test.js');
});
