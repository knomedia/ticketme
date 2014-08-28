#! /usr/bin/env node

var program = require('commander');
var configCmd = require('./commands/config');
var newCmd = require('./commands/new');
var showCmd = require('./commands/show');
var projectsCmd = require('./commands/projects');
var issueTypesCmd = require('./commands/issue_types');

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

program.parse(process.argv);
