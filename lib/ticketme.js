#! /usr/bin/env node

var program = require('commander');
var configCmd = require('./commands/config_cmd');
var newCmd = require('./commands/new_cmd');
var showCmd = require('./commands/show_cmd');

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


program.parse(process.argv);
