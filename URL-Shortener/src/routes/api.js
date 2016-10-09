// bringing in URL to be manipulated.

const url = require('../models/url.js');


// Router setup to return routes.

module.exports = function (express) {
  const router = express.Router();
// Returns all URL

  router.get('/urls', function (req, res) {
    url.findAll(function (err) {
      res.status(500).json(err);
    }, function (data) {
      res.status(200).json(data);
    });
  });


// Returns a single url

  router.get('/url/:id', function (req, res) {
    req.body.id = req.params.id;
    url.find(req.body, function (err) {
      res.status(500).json(err);
    }, function (data) {
      res.status(200).json(data);
    });
  });

// Stores a new URL in the DB

  router.post('/url', function (req, res) {
    url.create(req.body, function (err) {
      res.status(500).json(err);
    }, function (data) {
      res.status(200).json(data);
    });
  });

// Updates a URL


  router.post('/url/:id', function (req, res) {
      req.body.id = req.params.id;
    url.update(req.body, function (err) {
      res.status(500).json(err);
    }, function (data) {
      res.status(200).json(data);
    });
});

// Destroys a URL

  router.delete('/url/:id', function (req, res) {
    req.body.id = req.params.id;
    url.destroy(req.body, function (err) {
      res.status(500).json(err);
    }, function (data) {
      res.status(200).json(data);
    });
  });

  return router;
};
