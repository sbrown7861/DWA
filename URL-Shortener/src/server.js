
// API dependant packages to be required

const express = require('express');
const bodyParser = require('body-parser');


// Instantiate "APP"

const app = express();

//Configuration

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true,
}));


// Function to make sure server is up and running.
app.listen(port,function(){
    console.log('Server is active on', port)
});


// Function to use the routes file.
app.use('/api/v1', require('./routes/api.js')(express));

// Export server to be used elsewhere

/*exports.server = app.listen(port, function(){
    console.log('server is active on',port);
});*/