// Private static
(function () {
  var privateVariable = 10;
  function privateFunction() {
    return false;
  }

  // Global, use function expression.
  MyObject = function () {};
  MyObject.prototype.publicMethod = function () {
    privateVariable++;
    return privateFunction;
  };
});

(function () {
  var name = "";
  Person = function (value) {
    name = value;
  };

  Person.prototype.getName = function () {
    return name;
  };

  Person.prototype.setName = function (value) {
    name = value;
  };
})();

var person1 = new Person("Nicholas");
lg(person1.getName());
person1.setName("Greg");
lg(person1.getName());

var person2 = new Person("Michael");
lg(person1.getName());
lg(person2.getName());
