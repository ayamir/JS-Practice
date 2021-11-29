function Person(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    window.console.log(name);
  };
  return o;
}

var friend = Person("Nicholas", 29, "Software Engineer");
friend.sayName();
