function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"],
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yaPerson = object(person);
yaPerson.name = "Linda";
yaPerson.friends.push("Barbie");

window.console.log(person.friends);
window.console.log(person.name);
