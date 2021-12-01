const log = window.console.log;
function Person() {}

Person.prototype = {
  constructor: Person,
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName: function () {
    log(this.name);
  },
};
Object.defineProperty(Person.prototype, "constructor", {
  enumerable: false,
  value: Person,
});
function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && name in object;
}

var person = new Person();
log(hasPrototypeProperty(person, "name"));
person.name = "Greg";
log(hasPrototypeProperty(person, "name"));

var keys = Object.keys(Person.prototype);
log(keys);

var p1 = new Person();
p1.name = "Rob";
p1.age = 20;
var p1keys = Object.keys(p1);
log(p1keys);
var keysAll = Object.getOwnPropertyNames(Person.prototype);
log(keysAll);

var friend = new Person();
log(friend instanceof Object);
log(friend instanceof Person);
log(friend.constructor == Person);
log(friend.constructor == Object);

Person.prototype.sayHi = function () {
  log("Hi");
};
friend.sayHi();
