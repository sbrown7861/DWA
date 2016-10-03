
// Loads the DB to be used to update and create urls.

const db = require('./db');

// Create a url

exports.create= function(payload, err, success){
    db.urlTable.create(payload).then(success).catch(err);
};

// Find all urls

exports.findALL = function(err, success){
    db.urlTable.findALL().then(success).catch(err)
};

// Find one URL

exports.find= function(payload, err, success){
    db.urlTable.find({
        where: payload.id
      // Finds relations
    },
        include[{
            all: true,
            nested: true
        }]
    ).then(success).catch(err)
};

// Destroy URL

exports.find= function(payload, err, success){
    db.urlTable.find({
            where: payload.id
            // Finds relations
        }).then(success).catch(err)
};