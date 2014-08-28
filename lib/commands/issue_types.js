var connectionBuilder = require('../jira/connection_builder');
var buildLine = require('../utils/build_line');

module.exports = function(){
  connectionBuilder(function(connection){
    connection.listIssueTypes(function(err, types) {
      if (err){
        console.log(err);
        return
      }

      console.log('');
      var label = types.length + ' total issue types';
      console.log(label);
      console.log(buildLine(label.length));

      console.log('');
      types = types.sort(function(a,b) {
        return (a.name < b.name)? -1 : 1;
      });
      types.forEach(function(t) {
        if (t.description && t.description.length) {
          console.log("%s [%s]: %s", t.name, t.id, t.description);
          //console.log(t.id + " - " + t.name + ": " +  t.description);
        } else {
          console.log("%s [%s]", t.name, t.id);
        }
      });
      console.log('');
    });
  });
}
