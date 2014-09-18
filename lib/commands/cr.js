var connectionBuilder = require('../jira/connection_builder');
var splitCommaList = require('../utils/split_comma_list');
var jiraLink = require('../jira/link');
var loadConfig = require('../config/load_config.js');
var buildCloseTransition = require('../utils/build_close_transition');


module.exports = function(gerritUrl){

  function buildIssue(config) {
    var username = config.properties.username.default;
    var issue = {fields: {}};
    var f = issue.fields;
    f.project = {key: 'WF'};
    f.summary = 'CR - ' + gerritUrl;
    f.description = 'Did code review for: ' + gerritUrl;
    f.issuetype = {name: 'Task'};

    f.assignee = {name: username};
    f.reporter = {name: username};


    f.labels = splitCommaList('code_review');
    return issue;
  }

  connectionBuilder(function(connection){
    loadConfig(function(config){
      var newIssue = buildIssue(config);

      connection.addNewIssue(newIssue, function(err, issue) {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log('');
          console.log('Created ' + issue.key + ' - ' + jiraLink(issue.key));

          connection.listTransitions(issue.key, function(err, trans){
            if (err) { console.log(err); return }
            var transition;
            trans.forEach(function(t){
              // 41 is the id of 'open to closed'
              if (t.id === '41') {
                transition = t;
              }
            });

            if (transition) {
              console.log('closing ' + issue.key);
              var payload = buildCloseTransition(41);
              connection.transitionIssue(issue.key, payload, function(err, success){
                console.log(err || success);
                console.log('');
              });
            }
          });
        }
      });
    });
  });
}
