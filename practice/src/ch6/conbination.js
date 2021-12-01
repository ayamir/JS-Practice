const lg = window.console.log;
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
  lg(this.name);
};

function SubType(name, age) {
  // Stealing
  SuperType.call(this, name);
  this.age = age;
}

// Inherit
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
  lg(this.age);
};

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
lg(instance1.colors);
instance1.sayName();
instance1.sayAge();

var instance2 = new SubType("Greg", 27);
lg(instance2.colors);
instance2.sayName();
instance2.sayAge();
