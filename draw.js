var draw = {
  drawBackground: function(){
  var go = require('go');

  var bg = go.canvas.background;

  bg.context.fillStyle = bg.fillStyle;
  bg.context.fillRect(0,0,bg.w, bg.h);

  },

  drawUnits: function() {
    window.requestAnimationFrame(draw.drawUnits);
    var go = require('go');
    var units = go.units;
    var canvas = go.canvas.units;
    var context = canvas.context;
    context.clearRect(0,0,canvas.w, canvas.h);
    units.forEach(function(unit) {
      context.beginPath();
      context.arc(unit.posx, unit.posy, unit.r, 0, Math.PI * 2);
      context.fillStyle = unit.fillStyle;
      context.fill();
    });
  }
};

module.exports = draw;
