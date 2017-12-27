/**
 * Created by Netael on 15/08/2017.
 */

var express = require('express');
var router = express.Router();
var path = require('path');
var LocationEventsFetcher = require('../lib/LocationEventsFetcher.js');
// process.env.ACCESS_TOKEN  = "netael k";
// var config = require('config');
// var request = require('request');
// var tokenExp = require("../lib/app_token.js");
// var EventSet = require("../lib/EventSet.js");

// var events = new EventSet();
let startLat =  31.762050, startLon = 35.197000; // Jerusalem City Area
let fetcher = new LocationEventsFetcher({lat: startLat, lon: startLon});
let got = false;
setTimeout(() => fetcher.fetch(events => console.log('got', events && events.length, 'events')), 5000);

/* GET home page. */
// router.get('/', function(req, res, next) {
//     // TODO: remove token from config OR find better place to store token
//     res.send('CALL /events TO GET THE EVENTS :: need to switch to serve Angular app');
// });

router.get('/events', function(req, res, next) {
    res.send(fetcher.events());
});

router.get('/*', function (req, res) {
    console.log('SERVE ANGULAR');
    console.log('dir:',__dirname);
    console.log('file:',path.join(__dirname,'..', 'public/events-app/dist/index.html'));
    res.sendFile(path.join(__dirname,'..', 'public/events-app/dist/index.html'));
});



module.exports = router;
