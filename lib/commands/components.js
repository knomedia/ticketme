var connectionBuilder = require('../jira/connection_builder');
var buildLine = require('../utils/build_line');

module.exports = function(projectId){
  connectionBuilder(function(connection){
    connection.listComponents(projectId, function(err, comps) {
      if (err){
        console.log(err);
        return
      }

      comps = comps.sort(function(a,b){
        return (a.name < b.name)? -1 : 1;
      });
      console.log('');
      var label = comps.length + ' total components';
      console.log(label);
      console.log(buildLine(label.length));

      console.log('');
      comps.forEach(function(c) {
        console.log("%s [%s]", c.name, c.id);
      });
      console.log('');
    });
  });
}
