var tokenExp = require("../lib/app_token.js");
var request = require('request');

/**
 * my request module
 */
 class Requester {

 	constructor(url) {
 		this.baseUrl = url;
 	}

 	eventsByLocation(lat, lon, radius, callback) {
 		request(`${this.baseUrl}/events?lat=${lat}&lng=${lon}&distance=${radius}&sort=venue&accessToken=${tokenExp.token}`, function (error, response, body) {
 			callback && callback(body);
 		});
 	}

 }

// use as singleton
const url = 'http://localhost:3000'; // TODO: replace with config variable
const instance = new Requester(url);
Object.freeze(instance);

 module.exports = instance;