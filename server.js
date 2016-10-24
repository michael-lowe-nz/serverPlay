var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

var data = require('./db/data');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home',data);
});

app.listen(3000, function(){
  console.log("Server.js is listening...");
});
