
// Sequelize to run mysql with node
const Sequelize = require('sequelize');


// dotenv to keep "business information" out of git.

// setting up new database connection with sequelize

const sequelize = new Sequelize('URL-Shortener', 'root', 'root',{

    host: '127.0.0.1',
    dialect: 'mysql',
    port: 8889,
    pool:{
        max: 5,
        min: 0,
        idle: 10000
    },

    // logging off to keep DB clutter free.

    logging: false

});

// new table to be added to the DB

const url = sequelize.define('url', {
    url: Sequelize.STRING

});

//Syncs to the DB

sequelize.sync();

exports.sequelize = sequelize;
exports.url = url;