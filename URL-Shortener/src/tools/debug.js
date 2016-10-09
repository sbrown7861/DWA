// needs dotenv to test if debug is true in order to run
// Dot env is set as a dev dependencency for this project which triggers an error with ESLint

require('dotenv').config();

// Checks .env to see if debug is true

if (process.env.DEBUG === true) {
// Used to write a file stream for logs
  const fs = require('fs');

// To create a new Console to be used with debug

  const Console = console.Console;


  const output = fs.createWriteStream('logs.txt');

    // Exports to be used on other pages.

  exports.debug = debug;


// Main logging function to be used on other pages.
  debug = Console(output)}

