
// API dependant packages to be required

var express = require('express');
var body_parser = require('body-parser');

// Instantiate "APP"

var app = express();

//Configuration

var port = 3000;

// Function to make sure server is up and running.
app.listen(port,function(){
    console.log('Server is active on', port)
});


// Function to use the routes file.
app.use('/api', require('../routes/api.js')(express));