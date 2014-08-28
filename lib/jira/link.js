var jiraProps = require('./props');

module.exports = function(key) {
  elements = [jiraProps.props.protocol + ':/', jiraProps.props.host, 'browse', key];
  return elements.join('/');
}
