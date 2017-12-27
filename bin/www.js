/**
 * Created by Netael on 03/05/2017.
 */

/**
 * Module dependencies.
 */

var app = require('../app');
// var debug = require('debug')('wan:server');
var http = require('http');

var tokenExp = require("../lib/app_token.js");
var request = require('request');
var config = require('config');
const ID = "id";
const SECRET = "secret";

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3080');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * request access token from facebook api
 */
function genAccessToken() {
    let id = config.get(ID);
    let secret = config.get(SECRET);
    let requestTokenUrl = `https://graph.facebook.com/oauth/access_token?client_id=${id}&client_secret=${secret}&grant_type=client_credentials`;
    request(requestTokenUrl, function (error, response, body) {
        if (error) console.error('error:', error); // Print the error if one occurred 
        console.log('token generation statusCode:', response && response.statusCode); // Print the response status code if a response was received 
        tokenExp.token = JSON.parse(body).access_token || '';
    });
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
    // debug('Listening on ' + bind);
    genAccessToken();
}

// module.exports = {token:token};
