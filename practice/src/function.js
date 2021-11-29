const log = window.console.log;

function createComparisionFunction(propertyName) {
  return function (object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
}

var data = [
  { name: "Zechary", age: 28 },
  { name: "Nicholas", age: 29 },
];
data.sort(createComparisionFunction("name"));
log(data[0].name);

data.sort(createComparisionFunction("age"));
log(data[0].name);

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}

var trueFactorial = factorial;
factorial = function () {
  return 0;
};
log(factorial(5));
log(trueFactorial(5));

window.color = "red";
var o = {
  color: "blue",
};

function sayColor() {
  log(this.color);
}
sayColor();
o.sayColor = sayColor;
o.sayColor();

var obj = new Object("some text");
log(obj instanceof String);

var v = "25";
var number = Number(v);
log(typeof number);

var obj = new Number(v);
log(typeof obj);
