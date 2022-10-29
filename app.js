var express = require('express');
app = express();

var count = 0;

app.get('/', function (req, res) {
    console.log('new request is received on:' + count++ + "::" + new Date());
    res.send('Hello World ! version 2 updated to 3 deployed\n');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

