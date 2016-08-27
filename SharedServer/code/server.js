var express  = require('express');
var app      = express();                               // create our app w/ express
var morgan   = require('morgan');             // log requests to the console (express4)  


 // set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
/*var mongoose = require('mongoose');                     // mongoose for mongodb*/
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
/*var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)*/

// configuration =================

/*mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io*/

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json





var router = express.Router();
var urls = require("./urls.js");
urls.set_urls(router);
app.use('/', router);

/*
app.get('/api/example', function(req, res) {

    // use mongoose to get all todos in the database
    Todo.find(function(err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(todos); // return all todos in JSON format
    });

    //createJobPostion(req, res);

    res.json("HELLO WORD!");
});


// application -------------------------------------------------------------
app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

*/

// listen (start app with node server.js) ====================================== 
app.listen(80);
console.log("App listening on port 80");