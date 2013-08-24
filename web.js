var express = require('express');

var app = express.createServer(express.logger());

app.use(express.static(__dirname));
app.use(function(request, response) {
    var fs = require('fs');
    var content = fs.readFileSync('404.html').toString();
    response.status(404);
    response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
