var fs = require('fs');
module.exports = function(props) {

  var schemaFromProps = function(props) {
    var s = {};
    p = s.properties = {};
    p.username = {
      required: true,
      default: props.username
    }
    p.password = {
      required: true,
      hidden: true,
      default: props.password
    }
    p.protocol = {default: props.protocol}
    p.host = {default: props.host}
    p.port = {default: props.port}
    return s;
  }

  var save = function(schema) {
    fs.writeFile('config', JSON.stringify(schema), function (err) {
      if (err) return console.log(err);
      console.log('   ... config saved!');
    });
  }

  save(schemaFromProps(props));
}
