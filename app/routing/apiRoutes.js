var app = require("express");
var friendsData = require("app/data/friends.js")

app.get("/api/friends", function (req, res) {
    res.json(friendsData);

    console.log(res.body)
});




app.post("/api/friends", function (req, res) {
    var totalDif = 0;
    var match = {
        name: "",
        photo: "",
        friendDif: Infinity
    }


    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores

    var totalDif;
    for (let i = 0; i < friendsData.length; i++) {

        var currentFriend = friendsData[i];

        totalDif = 0;

        for (let j = 0; j < currentFriend.scores.length; j++) {
            var currentFriendScore = currentFriend.scores[j];
            var currentUserScore = userScores[j];

            totalDif += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));

        }


    }
})