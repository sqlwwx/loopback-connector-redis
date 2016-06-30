module.exports = require('should');

var juggler = require('loopback-datasource-juggler');

var DataSource = juggler.DataSource;
var ModelBuilder = juggler.ModelBuilder;
var Schema = juggler.Schema;

global.getSchema = function() {
    var db = new DataSource(require('../'), { debug: true, db: 'loopback-connector-redis-test' });
    // db.log = function (a) { console.log(a); };
    return db;
};

global.getModelBuilder = function() {
  return new ModelBuilder();
};

global.Promise = require('bluebird');
