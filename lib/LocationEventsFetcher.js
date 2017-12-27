var EventSet = require("../lib/EventSet.js");
var requester = require("../lib/Requester.js");
var ppf = 25; // number of points to query per fetch
var radius = 1000;
var edgeCount = Math.floor(Math.sqrt(ppf));
var stepLon = 0.004, stepLat = 0.006;
/**
 * fetch eventsby location
 */
 class LocationEventsFetcher {
 	constructor(location) { // location: {lat, lon}
 		this.location = location;
 		this.eventSet = new EventSet();
 		// this.requester = new Requester();
 	}

 	fetch(done) {
 		let responseCounter = 0;
 		for (let i = 0 ; i < edgeCount ; i ++) {
            for (let j = 0 ; j < edgeCount ; j ++) {
                let lat = this.location.lat + (i * stepLat);
                let lon = this.location.lon + (j * stepLon);
                requester.eventsByLocation(lat, lon, radius, (body) => {
                	const locationEvents = JSON.parse(body).events;
                	locationEvents && locationEvents.forEach(event => {
                        this.eventSet.add(event);
                    });
                    responseCounter ++;
                    if (responseCounter === ppf) {
                      	done && done(this.events());
                    }
                });
            }
        }
 	}

 	events() {
 		return this.eventSet.events();
 	}

 }

 module.exports = LocationEventsFetcher;