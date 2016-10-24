var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

/* MIDDLEWARE */
app.engine('exphbs',exphbs({defaultLayout: 'main';})); // Let's set the app's engine to handlebars
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  res.send("Hello There!");
});

app.get('/michael', function(req, res){
  res.render('home'); // This line is what starts to look different post handlebars install
});

app.listen(3000, function(){
  console.log("Server.js is listening...");
});
