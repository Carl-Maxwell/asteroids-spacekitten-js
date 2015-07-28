(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Ship = Asteroids.Ship = function(options) {
    Asteroids.MovingObject.call(this, options);

    this.radius = Ship.RADIUS;
    this.color = Ship.COLOR;
    this.vel = [0, 0];
    this.pos = options.game.randomPosition();
    this.angle = 0;
    this.img = new Image();
    this.img.src = 'spaceshipcat.jpg';
  };

  Ship.RADIUS = 10;
  Ship.COLOR = "#baf";

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Asteroids.Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Asteroids.Ship.prototype.power = function(impulse) {
    console.log("power");

    var rads = this.angle * Math.PI / 180;

    var thing = [
      impulse * ( Math.cos(rads)),
      impulse * ( Math.sin(rads))
    ];
    console.log(thing);

    this.vel[0] += thing[0];
    this.vel[1] += thing[1];
  };

  Asteroids.Ship.prototype.rot = function(angularImpulse) {
    this.angle += angularImpulse;
  };

  Asteroids.Ship.prototype.fireBullet = function () {
    console.log("fire");
    var b = new Asteroids.Bullet({game: this.game});
    //debugger
    this.game.add(b);
  };

  Asteroids.Ship.prototype.draw = function (ctx) {
    ctx.save();
    ctx.translate(this.pos[0] + 50, this.pos[1] + 30);

    // ctx.lineWidth = 2;
    // ctx.lineJoin = "round";
    ctx.rotate(this.angle * Math.PI / 180);
    ctx.drawImage(this.img, -50, -30);
    // ctx.beginPath();
    // ctx.moveTo(this.pos[0], this.pos[1] );
    // ctx.lineTo(this.pos[0] - 10, this.pos[1] - 10);
    // ctx.lineTo(this.pos[0] + 10, this.pos[1] - 10);
    // ctx.lineTo(this.pos[0] , this.pos[1] );
    //ctx.translate(0, 0);
    //ctx.stroke();
    ctx.restore();
  };

})();
