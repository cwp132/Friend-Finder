var express = require("express");
var path = require("path");
var http = require("http");
// var server = http.createServer();
// Sets up the Express App
// =============================================================
const app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());



// Start our server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});