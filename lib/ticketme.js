#! /usr/bin/env node

var program = require('commander');
var configCmd = require('./commands/config');
var newCmd = require('./commands/new');
var showCmd = require('./commands/show');
var projectsCmd = require('./commands/projects');
var issueTypesCmd = require('./commands/issue_types');
var componentsCmd = require('./commands/components');
var transitionCmd = require('./commands/transition');
var mineCmd = require('./commands/mine');

program
.version('0.0.7')

program
.command('config')
.description('edit global config options')
.action(configCmd)

program.
command('mine [show-all]')
.description('list open tickets assigned to you ([show-all] will give all tickets)')
.action(mineCmd);

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
.action(componentsCmd)


program
.command('close <key>')
.description('move a ticket from open to closed')
.action(transitionCmd);

program.on('--help', function(){
  console.log('  Note:');
  console.log('');
  console.log('    running ticketme with only a single arg aliases to the show command, for example:');
  console.log('');
  console.log('    $ ticketme CNVS-15003');
  console.log('');
  console.log('    ... is the same as');
  console.log('');
  console.log('    $ ticketme show CNVS-15003');
  console.log('');

});

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
