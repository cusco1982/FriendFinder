var path = require('path');
var friends = require('../data/friends.js');

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    
    
    
    // A POST routes /api/friends. This will be used to handle incoming survey results. 
    app.post('/api/friends', function (req, res) {
        var userInput = req.body;
        console.log('\n', 'userInput = ' + JSON.stringify(userInput), '\n');
        
        var userScore = userInput.scores;
        console.log('userScore = ' + userScore, '\n');
        
        // Compatibility
        // This route will also be used to handle the compatibility logic.
        var matchName = '';
        var matchImage = '';
        var totalDifference = 10000;

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;

            for (var j = 0; j < userScore.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userScore[j]);
            }
            console.log('diff = ' + diff);

            if (diff < totalDifference) {
                console.log('closest match found = ' + diff);
                console.log('friend name = ' , friends[i].name);

                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            };

        };

        friends.push(userInput);
        res.json({ matchName: matchName, matchImage: matchImage });

    });
};