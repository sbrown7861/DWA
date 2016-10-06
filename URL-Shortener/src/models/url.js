
// Loads the DB to be used to update and create urls.

const db = require('./db');

// Create a url

exports.create = function(payload, err, success){
    db.url.create(payload).then(success).catch(err);
};

// Find all urls

exports.findAll = function(err, success){
    db.url.findAll().then(success).catch(err);
};

// Find one URL

exports.find = function(payload, err, success) {
    db.url.find({

        where: {
            id: payload.id
        },
        include: [{
            all: true,
            nested: true
        }]

    }).then(success).catch(err);
};

// Destroy URL

exports.destroy= function(payload, err, success){
    db.url.destroy({
            where: {
                id: payload.id
            }
        }).then(success).catch(err);
};

// Updates a URL
exports.update = function(payload, err, success){
    db.url.find({
            where: {
                id: payload.id
            }

        }).then(function(existingData){
        existingData.updateAttributes(payload).then(success).catch(err);
    }).catch(err);
};