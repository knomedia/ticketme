var loadConfig = require('./load_config');
var jiraProps = require('../jira/props');

module.exports = function(callback) {

  function convertToProps (s) {
    var props = {
      username: s.properties.username.default,
      password: s.properties.password.default,
      protocol: s.properties.protocol.default,
      host: s.properties.host.default,
      port: s.properties.port.default
    }
    jiraProps.props = props;
    return props;
  }

  loadConfig(function(config) {
    callback.call(this, convertToProps(config));
  });

}
