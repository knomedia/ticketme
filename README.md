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

    mine [show-all]
       list open tickets assigned to you ([show-all] will give all tickets)

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
