var JiraApi = require('jira').JiraApi;
var getJiraProps = require('../config/get_jira_props');

module.exports = function(callback) {

  getJiraProps(function(props){
    var connection = new JiraApi(props.protocol, props.host, props.port, props.username, props.password, '2');
    callback.call(this, connection);
  });

}
