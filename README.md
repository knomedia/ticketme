# ticketme

Bare bones cli for quick JIRA ticket interaction.

## Usage

You'll need to configure `ticketme` by running the `config` command:

``` bash

ticketme config

```

This will walk you through a series of prompts to configure where your JIRA is
hosted, and set some defaults.


`ticketme -h` will get you all the available commands.

``` bash

ticketme -h

  Usage: ticketme [options] [command]

  Commands:

    config
       edit global config options

    cr <gerrit-url>
       create and close a code-review ticket

    pair <with-who>
       create and close a pairing ticket

    new
       create a new jira ticket

    show [key]
       show details of an existing ticket

    projects
       list all projects

    issuetypes
       list all issue types

    components [project]
       list components for a project

    close <key>
       move a ticket from open to closed


  Options:

    -h, --help     output usage information
    -V, --version  output the version number

  Note:

    running ticketme with only a single arg aliases to the show command, for example:

    $ ticketme CNVS-15003

    ... is the same as

    $ ticketme show CNVS-15003

```

![animated ticketme example]('ticketme.gif')

## Note

The `pair` and `cr` commands are helper commands that are currently specific to
the Web Frameworks teams at [Instructure](http://www.instructure.com/). They
create a ticket with specific labels on a specific project and move it to
closed. This functionality is availabe using the `new` and then the `close`
commands for other projects / teams.
