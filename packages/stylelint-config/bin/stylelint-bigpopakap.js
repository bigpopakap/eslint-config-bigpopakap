#!/usr/bin/env node
/**
 * @fileoverview This simply delegates to eslint
 * @author bigpopakap
 */
'use strict';

const shell = require('shelljs');
const yargs = require('yargs');

// Exit if there is no yarn installed
if (!shell.which('yarn')) {
  shell.echo('yarn not installed');
  shell.exit(1);
}

// Parse the command line arguments
const args = yargs.boolean('fix').default('fix', false).argv;

// Prepare the arguments to pass to eslint
const globArg = './**/*.{js,jsx,ts,tsx,scss,css,sass}';
const fixArg = args.fix ? '--fix' : '';

shell.exec(`yarn stylelint ${globArg} ${fixArg}`);