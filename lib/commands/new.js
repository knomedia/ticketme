var connectionBuilder = require('../jira/connection_builder');
var prompt = require('prompt');
var newTicketSchema = require('../utils/new_ticket_schema');
var splitCommaList = require('../utils/split_comma_list');
var jiraLink = require('../jira/link');


module.exports = function(){

  function buildIssue(results) {
    var comps;
    var labels;
    var issue = {fields: {}};
    var f = issue.fields;
    f.project = {key: results.project};
    f.summary = results.summary;
    f.issuetype = {name: results.issuetype};
    f.assignee = {name: results.assignee};
    f.reporter = {name: results.reporter};
    f.description = results.description;

    comps = splitCommaList(results.components, 'name');
    if (comps){
      f.components = comps
    }
    labels = splitCommaList(results.labels);
    if (labels) {
      f.labels = labels;
    }
    return issue;
  }

  connectionBuilder(function(connection){
    newTicketSchema(function(schema) {
      prompt.start();
      prompt.get(schema, function(err, results) {
        var issue = buildIssue(results);
        connection.addNewIssue(issue, function(err, issue) {
          if (err) {
            console.log(err);
            return;
          } else {
            console.log('');
            console.log(issue.key + ' - ' + jiraLink(issue.key));
            console.log('');
          }
        });
      });
    });

  });
}
