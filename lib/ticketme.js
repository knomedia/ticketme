#! /usr/bin/env node

var program = require('commander');
var configCmd = require('./commands/config');
var newCmd = require('./commands/new');
var showCmd = require('./commands/show');
var projectsCmd = require('./commands/projects');
var issueTypesCmd = require('./commands/issue_types');
var componentsCmd = require('./commands/components');

program
.version('0.0.2')

program
.command('config')
.description('add global config options')
.action(configCmd)

program
.command('new')
.description('create a new jira ticket')
.action(newCmd)

program
.command('show [key]')
.description('show details of an existing ticket')
.action(showCmd)

program
.command('projects')
.description('list all projects')
.action(projectsCmd)

program
.command('issuetypes')
.description('list all issue types')
.action(issueTypesCmd)

program
.command('components [project]')
.description('list components for a project')
.action(componentsCmd);

// unknown command, lets try to show a ticket
program.on('*', function() {
  // if you only have `ticketme some-123` we'll try to show it
  if (process.argv.length === 3) {
    var ticket = process.argv[2];
    showCmd(ticket);
  } else {
    program.help();
  }
});


program.parse(process.argv);

if (program.args.length < 1 ) {
  program.help();
}
