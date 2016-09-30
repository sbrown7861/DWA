// Router setup to return routes.

module.exports = function(express){
    var router = express.Router();



    // Function to randomly generate text

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


// Url route to return a JSON object with random text via makeURL function,

    router.get('/url', function(req, res)
    {res.json({url:makeURL()})});




    return router;
};