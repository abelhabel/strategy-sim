function move(unit) {
  unit.posx += unit.moveSpeed;
}

function unitActions() {
  var units = require('go').units;

  units.forEach(function(unit) {
    move(unit);
  });
}

module.exports = unitActions;
