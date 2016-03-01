var express = require('express');
var app = express();

app.use('/', express.static('public'));

var port = process.env.PORT || 3000;
app.listen(port);
console.log('You are on port 3000')