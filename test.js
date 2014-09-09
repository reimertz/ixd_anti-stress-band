var five = require("johnny-five");

five.Board().on("ready", function() {
  var rgb, rainbow, analog, index;

  rgb = new five.Led.RGB([6, 5, 3]);
  analog = new five.Pin("A0");
  
  rgb.color("#ff0000");
  rgb.pulse(500);

  setInterval(function() {
    analog.query(function(state) {
      console.log(state);
    });
  }, 10);
});

