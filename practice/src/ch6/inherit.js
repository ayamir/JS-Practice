const log = window.console.log;
function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};

var instance = new SubType();
log(instance.getSuperValue());
log(instance.getSubValue());

log(instance instanceof Object);
log(instance instanceof SuperType);
log(instance instanceof SubType);

log(Object.prototype.isPrototypeOf(instance));
log(SuperType.prototype.isPrototypeOf(instance));
log(SubType.prototype.isPrototypeOf(instance));
