// Router setup to return routes.

module.exports = function(express){
    var router = express.Router();



    // Function to randomly generate text

    function makeid()
    {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }


// Url route to return a JSON object with random text

    router.get('/url', function(req, res)
    {res.json({url:makeid()})});




    return router;
};