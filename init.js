'use strict';

function initCanvas() {
  var Canvas = require('canvas');
  var go = require('go');

  var bg = new Canvas('canvas', 600, 600);
  bg.fillStyle = 'rgb(255, 0, 0)';
  go.canvas.background = bg;

  var units = new Canvas('units', 600, 600);
  go.canvas.units = units;
}

function initLoops() {
  var draw = require('draw');
  draw.drawBackground();
  draw.drawUnits();
  var go = require('go');
  var Unit = require('slow-and-strong');
  var unitActions = require('unit-actions');
  go.unitTimer = setInterval(unitActions, 200);

  setInterval(function(){
    go.units.push(new Unit(0, Math.random() * 600));
  }, 3000);
}

module.exports = {initCanvas: initCanvas, initLoops: initLoops};
