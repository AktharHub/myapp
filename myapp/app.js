var express = require('express');
var app = express();

app.get('/', function (req,res) {
    res.send('hello to node');
});

app.listen(3000, function () {
   console.log('App is running in 3000 port or change it');
});