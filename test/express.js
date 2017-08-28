// BASE SETUP FOR API USING EXPRESS
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express

var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 9000; // set port

// ROUTES FOR OUR API
// =============================================================================
var port = process.env.PORT || 9000; // set port
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {


    var http = require('http');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://mongo/people";
    console.log(url);
    //Connect to the db
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        /*var query = {
            name: "Amanda"
        };*/
        //db.collection("contacts").find(query).toArray(function (err, result)
        //find all
        db.collection("contacts").find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(JSON.stringify(result));
            db.close();
        });
    });

    // res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/data', router);

// START THE SERVER
// =============================================================================

app.listen(port);
console.log('Test data ' + port);
