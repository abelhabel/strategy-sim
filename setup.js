window.module = {
  camelize: function(str) {
    return str.replace(/\-[a-z]?|_[a-z]|\s[a-z]/g, function(letters, index) {
      return index == 0 ? letters.toLowerCase() : letters.toUpperCase();
    }).replace(/\-|_|\s/g, '');
  },
  add: function(val){
    module[module.camelize(module.nextModuleName)] = module[module.nextModuleName] = val;
  },
  exports: null,
  set exports(val) {
    module.add(val);
  }
};

function require(moduleName){
  if(module[moduleName] || module[module.camelize(moduleName)]){
    return module[moduleName] ||
    module[module.camelize(moduleName)];
  }

  function getScript(fileName, callback) {
    var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    ajax.onreadystatechange = function(res) {
      if (ajax.readyState == 4 && ajax.status == 200) {
        if(typeof callback === 'function')
          callback(fileName, ajax.responseText);
      }
    };
    ajax.open("GET", "/js/" + fileName + '.js', true);
    ajax.send();
  }

  function compileScript(name, script) {
    var tag = document.createElement('script');
    tag.type = "text/javascript";
    tag.src = "data:text/javascript;base64," + btoa(
      "(function(){" +
        script +
      "})();"
    );
    document.head.appendChild(tag);
    tag.onload = function(event) {
      scriptLoader.next(name);
    };
  }

  var scriptLoader = {
    scripts: [],
    next: function() {
      if(this.scripts.length){
        module.nextModuleName = this.scripts[0];
        getScript(this.scripts[0], compileScript);
        scriptLoader.scripts.shift();
      }else{
        module.nextModuleName = '';
      }
    }
  };

  scriptLoader.scripts.push.apply(scriptLoader.scripts, arguments);
  scriptLoader.next();

}

require('go', 'base-unit', 'base-object', 'slow-and-strong','canvas','unit-actions' ,'draw', 'init');
