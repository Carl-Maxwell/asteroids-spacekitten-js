(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  Asteroids.MovingObject = function(options) {
    options = options || {};
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.isWrappable = true;
  };

  Asteroids.MovingObject.prototype.draw = function(ctx) {

    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2* Math.PI,
      false
    );

    ctx.fill();
  };

  Asteroids.MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    if (this.isWrappable && this.game.isOutOfBounds(this.pos)) {
      this.pos = this.game.wrap(this.pos);
    } else if (!this.isWrappable && this.game.isOutOfBounds(this.pos)) {
      this.game.remove(this);
    }
  };

  Asteroids.MovingObject.prototype.isCollidedWith = function(otherObj) {
    return Asteroids.Util.distance(this.pos, otherObj.pos) < this.radius + otherObj.radius;
  };
})();
