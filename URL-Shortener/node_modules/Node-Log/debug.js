// needs dotenv to test if debug is true in order to run

require('dotenv').config();


// Checks .env to see if debug is true

if (process.env.DEBUG = true) {
// Used to write a file stream for logs
  const fs = require('fs');

// To create a new Console to be used with debug

  Console = console.Console;


  const output = fs.createWriteStream('logs.txt');

// Main logging function to be used on other pages.

  debug = Console(output);
}
// Exports to be used on other pages.

exports.debug = debug;

