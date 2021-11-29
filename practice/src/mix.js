const log = window.console.log;
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ["Shelby", "Court"];
}

Person.prototype = {
  constructor: Person,
  sayName: function () {
    log(this.name);
  },
};

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push("Van");
log(person1.friends);
log(person2.friends);
log(person1.friends == person2.friends);
log(person1.sayName == person2.sayName);

function PersonDynamic(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  if (typeof this.sayName != "function") {
    PersonDynamic.prototype.sayName = function () {
      log(this.name);
    };
  }
}

var friend = new PersonDynamic("Nicholas", 29, "Software Engineer");
friend.sayName();
