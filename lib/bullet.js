(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Bullet = Asteroids.Bullet = function(options) {
    Asteroids.MovingObject.call(this, options);
    this.pos = this.game.ship.pos.slice();
    this.pos[0] += 50;
    this.pos[1] += 30;
    this.angle = this.game.ship.angle;
    this.radius = 1;
    this.color = Bullet.COLOR;
    this.isWrappable = false;

    var rads = this.angle * Math.PI / 180;

    this.vel = [
      1 * ( Math.sin(rads)),
      1 * ( -Math.cos(rads))
    ];

    // this.vel =  this.game.ship.vel.slice().map( function (el) {
    //   return 2 * el + (el > 1 ? 1 : -1);
    // }) ;

  };

  Bullet.COLOR = "#000";

  Asteroids.Bullet.prototype.isCollidedWith = function(otherObj) {
    if (otherObj instanceof Asteroids.Ship) return;

    return Asteroids.Util.distance(this.pos, otherObj.pos) < this.radius + otherObj.radius;
  };

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
})();
