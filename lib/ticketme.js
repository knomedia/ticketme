#! /usr/bin/env node

var program = require('commander');
var configCmd = require('./config_cmd');

program
.version('0.0.1')
.option('-C, --code-review', 'Code Review Ticket')
.option('-p, --pairing', 'Pairing Ticket')


program
.command('config')
.description('add global config options')
.action(configCmd)


program.parse(process.argv);
