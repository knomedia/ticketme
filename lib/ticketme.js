#! /usr/bin/env node

var program = require('commander');
var configCmd = require('./commands/config');
var newCmd = require('./commands/new');
var showCmd = require('./commands/show');
var projectsCmd = require('./commands/projects');

program
.version('0.0.1')
.option('-C, --code-review', 'Code Review Ticket')
.option('-p, --pairing', 'Pairing Ticket')


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


program.parse(process.argv);
