var connectionBuilder = require('../jira/connection_builder');
var jiraLink = require('../jira/link');
var loadConfig = require('../config/load_config.js');
var buildCloseTransition = require('../utils/build_close_transition');


module.exports = function(key){


  connectionBuilder(function(connection){
    connection.listTransitions(key, function(err, trans){
      if (err) { console.log(err); return }
      var transition;
      trans.forEach(function(t){
        // 41 is the id of 'open to closed'
        if (t.id === '41') {
          transition = t;
        }
      });
      if (transition) {
        console.log('closing ' + key + ' - ' + jiraLink(key));
        var payload = buildCloseTransition(41);
        connection.transitionIssue(key, payload, function(err, success){
          console.log(err || success);
        });
      }
    });
  });

}

