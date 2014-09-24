var connectionBuilder = require('../jira/connection_builder');
var jiraLink = require('../jira/link');
var buildLine = require('../utils/build_line');
var loadConfig = require('../config/load_config.js');

module.exports = function(showAll) {

  var openOnly = !showAll

  function calculateMaxLine(issues, start) {
    var max = start;
    console.log('starting at: ' + max);
    issues.forEach(function(i){
      var summary = i.summary.length || 0;
      var link = i.link.length || 0;
      var numToCheck = Math.max(summary, link);
      max = Math.max(max, numToCheck);
    });
    return max
  }

  function buildDisplayArray(issues) {
    var display = [];
    issues.forEach(function(i){
      var obj = {
        summary: i.key + ' - ' + i.fields.summary,
        link: jiraLink(i.key)
      }
      display.push(obj);
    });
    return display;
  }

  function printLine(l) {
    console.log(buildLine(l));
  }

  function printDisplayIssues(issues, l) {
    issues.forEach(function(i, index) {
      printLine(l);
      console.log('');
      console.log(i.summary);
      console.log(i.link);
      if (index === issues.length -1) {
        console.log();
        printLine(l);
      }
      console.log();
    });
  }

  connectionBuilder(function(connection){
    loadConfig(function(config){
      var userName = config.properties.username.default;
      connection.getUsersIssues(userName, openOnly, function(err, issues){
        if(err) {
          console.log(err);
        } else {
          var displayIssues = buildDisplayArray(issues.issues);

          var heading = 'Showing ' + issues.issues.length + ' of ' +  issues.total + ' for ' + userName;
          var lineLength = calculateMaxLine(displayIssues, heading.length);
          console.log(lineLength);

          console.log();
          console.log(heading);
          console.log();

          printDisplayIssues(displayIssues, lineLength);
        }
      });
    });
  });

}
