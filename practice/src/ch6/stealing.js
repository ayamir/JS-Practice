function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

function SubType() {
  SuperType.call(this, "Nicholas");
  this.age = 29;
}

const lg = window.console.log;
var instance1 = new SubType();
instance1.colors.push("black");
lg(instance1.colors);
lg(instance1.name);
lg(instance1.age);

var instance2 = new SubType();
lg(instance2.colors);
