
*******************************Utility Tool Usage************************************


In order to use this Utility tool it must be installed via NPM and required via  require('path/debug');

When used with a function or any other block where a developer would normally console.log out some information the
tool may be called by using debug.log('Information wishing to be stored in a log to be reviewed'); after doing so the tool
will write a file called log.txt in the project directory adn this is where the logs will be sent. The logs can be as intricate
or as simple as the developer would like them to be.

******************************Example************************************************

    // Logging function for when a request is made

  if (success) {
    debug.log('The find all request for the url model was successful. Route: /urls');
  } else {
    debug.log('There was an issue with your request this is a warning please look into the findAll function. Route: /urls');
  }

  By including a if/else statement inside of a function the user may test if the function was successful or not and also
  test specific values.




