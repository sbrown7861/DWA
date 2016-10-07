/*
* Color escape codes for terminal
* 30 - Black
 31 - Red
 32 - Green
 33 - Yellow
 34 - Blue
 35 - Magenta
 36 - Cyan
 37 - White
*
* */


// Color codes for terminal window.

const black = '\x1b[30m';

const red = '\x1b[31m';

const green = '\x1b[32m';

const yellow = '\x1b[33m';

const blue = '\x1b[34m';

const magenta = '\x1b[35m';

const cyan = '\x1b[36m';

const white = '\x1b[37m';




//Used to write a file stream for logs
var fs = require('fs');

// To create a new Console to be used with logger
const Console = require('console').Console;
const Console = console.Console;


var output = fs.createWriteStream('./logs/logs.txt');

// Main logging function




if(proccess.env.DEBUG = true){



}
