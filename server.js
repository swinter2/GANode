var express = require('express'),
    fs = require('fs'),
    logfmt = require("logfmt"),
    minify = require('minify');
var app = express();

var DEBUG = true;

if (!DEBUG) {
    // Minify all Javascript
    minify.optimize([
        './static/scripts/analytics/api.js',
        './static/scripts/analytics/app.js',
        './static/scripts/analytics/controllers/Analytics.js'
    ]);
}

app.use(logfmt.requestLogger());

//app.use("/static", express.static('./static'));
app.use("/", express.static('./views'));

app.use(function(req, res, next){
    console.log("Page not found - %s", req.url);
    res.send(404, "Page not found!");
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.send(500, "Whoops, there was an error.");
});

var port = process.env.PORT || 8000;
var server = app.listen(port, function () {
    console.log("[%s] Listening on port %d", process.pid, server.address().port);
});

