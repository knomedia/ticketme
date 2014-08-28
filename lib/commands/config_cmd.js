var prompt = require('prompt');
var loadConfig = require('../config/load_config');
var saveConfig = require('../config/save_config');

module.exports = function(options){
  var schema = {};
  loadConfig(function(schema){
    prompt.start();
    prompt.get(schema, function (err, result) {
      saveConfig(result);
     });
  });
}
