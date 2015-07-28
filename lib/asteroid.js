(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  Asteroids.Asteroid = function(options) {
    Asteroids.MovingObject.call(this, options);

    this.color = options.color || this.constructor.COLOR ;
    this.radius = options.radius || this.constructor.RADIUS;
    this.vel = options.vel || Asteroids.Util.randomVec(3);
  };

  Asteroids.Asteroid.COLOR = "#fab";
  Asteroids.Asteroid.RADIUS = 10;

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
})();
