var express = require('express'),
    fs = require('fs');

var app = express();

app.use("/static", express.static('static'));
app.use("/", express.static('views'));

// app.get('/', function (req, res) {
//     // fs.readFile('./templates/index.html', function (err, data) {
//     //     if (err) console.log(err);
//     //     res.end(data);
//     // });
//     // res.send("Hi there!");
// });

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

