var baseObject = require('base-object');

function Canvas(id){
  this.element = document.getElementById(id);
  this.context = this.element.getContext('2d');
}

Canvas.prototype = baseObject;

module.exports = Canvas;