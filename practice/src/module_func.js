// Module pattern for singleton
var singleton = function () {
  var privateVariable = 10;
  function privateFunction() {
    return false;
  }

  return {
    publicProperty: true,
    publicMethod: function () {
      privateVariable++;
      return privateFunction();
    },
  };
};

var application = (function () {
  var components = new Array();

  components.push(new BaseComponent());

  return {
    getComponentCount: function () {
      return components.length;
    },

    registerComponent: function (component) {
      if (typeof component == "Object") {
        components.push(component);
      }
    },
  };
})();
