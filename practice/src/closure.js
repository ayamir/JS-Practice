var lg = window.console.log;
var name = "The Window";

var object = {
  name: "My Object",
  getNameFunc: function () {
    // this error
    var that = this;
    return function () {
      return that.name;
    };
  },
};

lg(object.getNameFunc()());

function outputNumber(count) {
  // simulate block
  (function () {
    for (var i = 0; i < count; i++) {
      lg(i);
    }
  })();
}

outputNumber(9);

// Private variable
function MyObject() {
  var privateVariable = 10;
  function privateFunction() {
    return false;
  }

  this.publicMethod = function () {
    privateVariable++;
    return privateFunction;
  };
}
