var express = require('express');
var app = express();

app.use("/static", express.static('./static'));
app.use("/", express.static('./views'));

app.use(function(req, res, next){
    res.send(404, "Page not found!");
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.send(500, "Whoops, there was an error.");
});

var server = app.listen(8000, function () {
    console.log("Listening on port %d", server.address().port);
});

