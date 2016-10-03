
// Sequalize to run mysql with node
const Sequelize = require('sequelize');


// dotenv to keep "business information" out of git.
require('dotenv').config();

// setting up new database connection with sequelize

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{

    host: process.env.DB_HOST,
    dialect: process.env.DB_SCHEMA,
    port: 3000,
    pool:{
        max: 5,
        min: 0,
        idle: 10000
    },

    // logging off to keep DB clutter free.

    logging: false

});

// new table to be added to the DB

const urlTable = sequelize.define('urlTable',{
    url:{
        type: Sequelize.STRING
    }

});

//Syncs to the DB

sequelize.sync();

exports.sequelize = sequelize;
exports.urlTable = urlTable;