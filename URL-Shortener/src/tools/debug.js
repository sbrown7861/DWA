// needs dotenv to test if debug is true in order to run

require('dotenv').config();


// Color codes for terminal window.

const black = '\x1b[30m';

const red = '\x1b[31m';

const green = '\x1b[32m';

const yellow = '\x1b[33m';

const blue = '\x1b[34m';

const magenta = '\x1b[35m';

const cyan = '\x1b[36m';

const white = '\x1b[37m';


// Checks .env to see if debug is true
if(process.env.DEBUG = true) {

//Used to write a file stream for logs
    var fs = require('fs');

// To create a new Console to be used with debug

    const Console = console.Console;


    var output = fs.createWriteStream('logs.txt');

// Main logging function to be used on other pages.

  debug = Console(output);

}

// Exports to be used on other pages.

exports.debug = debug;

