var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.static('public'));




app.set('view engine', 'pug')

// Handling code below, setup code above


app.get('/', function (req, res) {
   res.send('Hello World');
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
   	  title: 'hey',
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      Age: req.body.Age,
      born: 2022 - req.body.Age
   };
   console.log(response);
   res.render('result', response)
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
