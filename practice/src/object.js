var log = window.console.log;
var book = {};
Object.defineProperties(book, {
  _year: {
    writable: true,
    value: 2004,
  },
  edition: {
    writable: true,
    value: 1,
  },
  year: {
    get: function () {
      return this._year;
    },
    set: function (newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
      }
    },
  },
});

var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
log(descriptor.value);
log(descriptor.configurable);
log(typeof descriptor.get);

var descriptor = Object.getOwnPropertyDescriptor(book, "year");
log(descriptor.value);
log(descriptor.enumerable);
log(typeof descriptor.get);

// Factory mode
function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    log(this.name);
  };
  return o;
}
var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");

// Constructor mode
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    log(this.name);
  };
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
log(person1.constructor === Person);
log(person2.constructor === Person);
log(person1 instanceof Person);
log(person1 instanceof Object);
log(person2 instanceof Person);
log(person2 instanceof Object);

var obj = new Object();
Person.call(obj, "Kristen", 25, "Nurse");
obj.sayName();
