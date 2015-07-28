var inherits = function (ChildClass, ParentClass) {
  var Surrogate = function () {};
  Surrogate.prototype = ParentClass.prototype;
  ChildClass.prototype = new Surrogate();
  ChildClass.prototype.constructor = ChildClass;
}

function MovingObject () {
  this.x = 87;
};

MovingObject.prototype.moving = function() {
  console.log("moving!");
};

function Ship () {
  // MovingObject.call(this);
};
inherits(Ship, MovingObject);

function Asteroid () {};
inherits(Asteroid, MovingObject);

Asteroid.prototype.moving = function() {
  console.log("rawr rawr!");
};
