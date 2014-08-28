var connectionBuilder = require('../jira/connection_builder');

module.exports = function(key){
  connectionBuilder(function(connection){
    connection.findIssue(key, function(error, issue) {
      console.log('Status: ' + issue.fields.status.name);
    });
  });
}
