var baseObject = require('base-object');

function Canvas(id, w, h){
  this.element = document.getElementById(id);
  this.context = this.element.getContext('2d');
  this.w = this.element.width = w || 100;
  this.h = this.element.height = h || 100;
}

Canvas.prototype = baseObject;

module.exports = Canvas;
