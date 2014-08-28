var fs = require('fs');
var configLocation = require('./config_location');
module.exports = function(callback) {

  var loadData = function() {
    var location = configLocation();
    fs.readFile(location, 'utf8', function (err,data) {
      var defaults = buildDefaults();
      if (err) {
        callback.call(this, defaults)
      } else {
        var config = JSON.parse(data);
        callback.call(this, config)
      }
    });
  }

  var buildDefaults = function() {
    var s = {};
    p = s.properties = {};
    p.username = {
      required: true,
    }
    p.password = {
      required: true,
      hidden: true
    }
    p.protocol = {default: 'https'}
    p.host = {default: 'instructure.atlassian.net'}
    p.port = {default: '443'}
    return s;
  }

  loadData();
}

