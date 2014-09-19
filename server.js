var five = require("johnny-five"),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000,
    rgb;

app.use('/', express.static(__dirname + '/src'));
app.use(bodyParser());

app.post('/lamp', function (req, res) {
  console.log(req.body);

  rgb.color(req.body.color);

  res.end();
});

app.listen(port);
console.log('server running on: ' + port);

console.log('Initiating Arduino...');
five.Board().on("ready", function() {

  rgb = new five.Led.RGB([6, 5, 3]);
  rgb.color("#ff0000");
  
  console.log('Initiatin done!');
  
});


