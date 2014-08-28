var connectionBuilder = require('../jira/connection_builder');
var buildLine = require('../utils/build_line');

module.exports = function(){
  connectionBuilder(function(connection){
    connection.listProjects(function(err, projects) {

      console.log('');
      var label = projects.length + ' total projects';
      console.log(label);
      console.log(buildLine(label.length));

      console.log('');
      projects.forEach(function(p) {
        console.log(p.id, p.key, p.name);
      });
      console.log('');
    });
  });
}
