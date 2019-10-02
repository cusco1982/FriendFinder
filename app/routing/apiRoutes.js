// // GET route /api/friends
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// // POST ROUTE for incoming survey results
// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.


var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app) {
    // console.log('__ENTER apiRoutes.js__');

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req,res) {
        var userInput = req.body;
        console.log('\n','userInput = ' + JSON.stringify(userInput),'\n');

        var userResponses = userInput.scores;
        console.log('userResponses = ' + userResponses,'\n');
        
        // matching
        var matchName = '';
        var matchImage = '';
        var totalDifference = 10000; // initial value for comparison
        // loop over existing data
        for (var i = 0; i < friends.length; i++) {
             var diff = 0;
            //  console.log('friend = ' + JSON.stringify(friends[i]));

            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }
             console.log('diff = ' + diff);

             if (diff < totalDifference) {
                 console.log('closest match found = ' + diff);
                 console.log('friend name = ' + friends[i].name);
                //  console.log('friend image = ' + friends[i].photo);

                 totalDifference = diff;
                 matchName = friends[i].name;
                 matchImage = friends[i].photo;
             };
            
        };

        friends.push(userInput);
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

    });
};