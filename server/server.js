/**
 * This is the entry point for the server when a request is made wherr a server side (pre)render is
 * required. 
 **/


/** since the application is of a modular structure, transformation of modules in the components are
 * required, i.e. compile react components, this essentially allows the application to be server as if it was just
 * a single js and css file
 **/
require("babel-core/register")({
    "presets": ["es2015", "react", "stage-1"],
    "plugins": [
        [
            "css-modules-transform", {
                "generateScopedName": "[name]__[local]___[hash:base64:5]",
                "extensions": [".css"]
            }
        ],
        ["transform-decorators-legacy"], // needed for the connect module in the components 
        ["system-import-transformer"]
    ]
})

const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const compression = require("compression") // use for content encoding gzip
const path = require('path')


mongoose.connect("mongodb://mongo:27017/SERLER");
const db = mongoose.conections;

    // Route handlers go there
var index = require("./routes/index")
User = require("../src/components/models/users")

app.use(bodyParser.json())//use bodyparser to retain json object on post
app.use(compression()) // compresses the content in gzip 
app.use(express.static(__dirname + "/../dist"))



/**
 * This block is for server to server the correct file in the environment 
 * for the purpose of loading vender productions files
 **/
if (process.env.NODE_ENV === 'production') {
    app.set('views', "./server/views/production")
} else {
    app.set('views', "./server/views/development")
}

app.set('view engine', 'ejs') // view engine to enable embedded javascript


// routes namespaces
app.use("/", index);

app.get('/users',function(req,res){
    User.getUsers(function(err, users){
        if(err){
            throw err;
        }
        res.json(users);
    });
});


app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    console.log("App is running in " + process.env.NODE_ENV + " environment");
})