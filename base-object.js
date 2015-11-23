var baseUnit = require('base-unit');

var baseObject = {
  name: 'base object',
  setOptions: function(options){
    for(var key in options){
      this[key] = options[key];
    }
  }
};


module.exports = baseObject;