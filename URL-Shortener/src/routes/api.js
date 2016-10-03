// bringing in URL to be manipulated.

const url = require('../models/url.js');

// Router setup to return routes.

module.exports = function(express){
    const router = express.Router();



    function makeURL()
    {

        // text is a container for the randomly generated text to be passed to via the for loop.
        var text = "";


        // Possible is the items that can be randomly generated. Could have used symbols and caps as well but this is supposed to be a URL.
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

        // For loop to generate random string

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        //returns text to the var text container at the top of the function.

        return text;
    }


// Returns all URL

    router.get('/url', function(req,res){
        url.findALL(function(err){
            res.status(500).json(err);
        },function(data){
            res.status(200).json(data);
        })
    });


// Returns a single url


    router.get('/url/:id', function(req, res){
        req.body.id = req.params.id;
        url.findALL(function(err){
            res.status(500).json(err);
        },function(data){
            res.status(200).json(data);
        })
    });



// Stores a new URL in the DB

    router.post('/url', function(req, res){
        url.create(res.json({url:makeURL()})), function(err){
            res.status(500).json(err)
        },function(data){
            res.status(200).json(data)
        }
    });


    return router;
};