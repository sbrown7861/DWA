
// Loads the DB to be used to update and create urls.

const db = require('./db');

// Unused constant necessary to use the debug functionality

const NodeLog = require('Node-Log');

// Create a url

exports.create = function (payload, err, success) {
  db.url.create(payload).then(success).catch(err);
};

// Find all urls

exports.findAll = function (err, success) {
  db.url.findAll().then(success).catch(err);

    // Logging function for when a request is made

  if (success) {
    debug.log('The find all request for the url model was successful. Route: /urls');
  } else {
    debug.log('There was an issue with your request this is a warning please look into the findAll function. Route: /urls');
  }
};

// Find one URL

exports.find = function (payload, err, success) {
  db.url.find({

    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],

  }).then(success).catch(err);

  // Logging function for when a request is made

  if (success) {
    debug.log('The find  request for the url model was successful. Route: /url/id');
  } else {
    debug.log('There was an issue with your request this is a warning please look into the find function Route: /url/id');
  }
};

// Destroy URL

exports.destroy = function (payload, err, success) {
  db.url.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);

    // Logging function for when a request is made

  if (success) {
    debug.log('The destroy request for the url model was successful Route: /url/id');
  } else {
    debug.log('There was an issue with your request this is a warning please look into the destroy function. Route: /url/id');
  }
};

// Updates a URL
exports.update = function (payload, err, success) {
  db.url.find({
    where: {
      id: payload.id,
    },

  }).then(function (existingData) {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);

    // Logging function for when a request is made

  if (success) {
    debug.log('The update request for the url model was successful. Route: /url/id');
  } else {
    debug.log('There was an issue with your request this is a warning please look into the update function of the url model. Route: /url/id');
  }
};
