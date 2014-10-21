var loadConfig = require('../config/load_config.js');

module.exports = function(cb){

  function schemaFromConfig(p) {
    var schema = {
      properties: {
        project: {
          description: 'Project Key',
          type: 'string',
          default: p.project.default,
          require: true
        },
        issuetype: {
          description: 'Issue Type',
          type: 'string',
          default: p.issuetype.default,
          required: true
        },
        summary: {
          description: 'Summary',
          type: 'string',
          required: true
        },
        description: {
          description: 'Description',
          type: 'string',
          required: false
        },
        components: {
          description: 'Component(s) comma, separated',
          type: 'string',
          default: p.components.default,
          required: true
        },
        labels: {
          description: 'Label(s) comma, separated',
          type: 'string',
          default: p.labels.default,
          required: false
        },
        assignee: {
          description: 'Assignee',
          type: 'string',
          default: p.username.default
        },
        reporter: {
          description: 'Reporter',
          type: 'string',
          default: p.username.default,
          required: true
        }
      }
    };
    return schema;
  }

  loadConfig(function(config){
    cb.call(this, schemaFromConfig(config.properties));
  });

}
