/**
 * unique array of events
 */

 class EventSet {
 	constructor(array) {
 		this.set = array || [];
 	}

 	add(event) {
 		// if event not in this.array -> add it
 		for (let i = 0 ; i < this.set.length ; i ++) {
 			// TODO: decide best approach to define unique event.
 			// note: found very similar events with multiple occurrences (diff id, same description)
 			if (this.set[i].description === event.description) {
 				return;
 			}
 			// if (this.set[i].id === event.id) {
 			// 	return;
 			// }
 		}
 		this.set.push(event);
 	}

 	events() { return this.set; }

 }

 module.exports = EventSet;