const log = window.console.log;
function Person(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    log(this.name);
  };
  return o;
}

var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();

function SpectialArray() {
  var values = new Array();
  values.push.apply(values, arguments);
  values.toPipedString = function () {
    return this.join("|");
  };
  return values;
}
var colors = new SpectialArray("red", "blue", "green");
log(colors.toPipedString());
