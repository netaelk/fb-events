/**
 * Created by Netael on 03/05/2017.
 */
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
// var req = require('./routes/req');
// var analysis = require('./routes/analysis');

var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/events-app/dist'),{index:false,extensions:['html']}));

app.use('/', index);
// app.get('/*', function (req, res) {
//     console.log('SERVE ANGULAR');
//     res.sendFile(path.join(__dirname,'public/events-app/dist/index.html'));
// });


// app.use('/req', index);
// app.use('/analysis', analysis);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error num ' + err.status);
});

module.exports = app;
