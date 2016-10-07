require('dotenv').config();

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




if(process.env.DEBUG = true){

//Used to write a file stream for logs
var fs = require('fs');

// To create a new Console to be used with logger

const Console = console.Console;


var output = fs.createWriteStream('logs.txt');

// Main logging function

const logger = new Console(output);

    exports.success =  logger.log(green,'This was a successful action, no need to worry');
    exports.err = logger.log(yellow, 'An error has occurred please check for issues');



}

