var prompt = require('prompt');
var loadConfig = require('./load_config');
var saveConfig = require('./save_config');


module.exports = function(options){
  var schema = {};
  loadConfig(function(schema){
    prompt.start();
    prompt.get(schema, function (err, result) {
      saveConfig(result);
     });
  });
}
