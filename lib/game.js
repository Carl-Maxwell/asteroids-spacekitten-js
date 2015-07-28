(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  Asteroids.Game = function () {
    this.DIM_X = window.innerWidth;
    this.DIM_Y = window.innerHeight;
    this.NUM_ASTEROIDS = 10;
    this.addAsteroids();
    this.ship = new Asteroids.Ship({game: this});
    this.img = new Image();
    this.img.src = 'little_cute_cat_1920x1080.jpg';
  };

  Asteroids.Game.prototype.addAsteroids = function () {
    this.asteroids = [];
    this.bullets = [];
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      this.asteroids[i] = new Asteroids.Asteroid({
        pos : this.randomPosition(),
        game: this
      } );
    }
  };

  Asteroids.Game.prototype.randomPosition = function () {
    return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
  };

  Asteroids.Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    ctx.drawImage(this.img, 0, 0);

    this.allObjects().forEach(function(thing){
      thing.draw(ctx);
    });
  };

  Asteroids.Game.prototype.add = function (obj) {
    if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    } else if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj);
    }

  };

  Asteroids.Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.bullets).concat([this.ship]);
  };

  Asteroids.Game.prototype.allNonAsteroidObjects = function() {
    return this.bullets.concat([this.ship]);
  };

  Asteroids.Game.prototype.moveObjects = function() {
    this.allObjects().forEach(function(asteroid) {
      asteroid.move();
    } );
  };

  Asteroids.Game.prototype.wrap = function(pos){
    pos[0] = pos[0] % this.DIM_X;
    if (pos[0] < 0) {
      pos[0] = this.DIM_X + pos[0];
    }
    pos[1] = pos[1] % this.DIM_Y;
    if (pos[1] < 0) {
      pos[1] = this.DIM_Y + pos[1];
    }
    return pos;
  };

  Asteroids.Game.prototype.isOutOfBounds = function(pos) {
    return (pos[0] < 0 || pos[0] > this.DIM_X) ||
      (pos[1] < 0 || pos[1] > this.DIM_Y);
  };

  Asteroids.Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Asteroids.Game.prototype.remove = function(obj) {
    this.asteroids = this.asteroids.filter(function(asteroid) {
      return asteroid !== obj;
    } );
    this.bullets = this.bullets.filter(function(bullet) {
      return bullet !== obj;
    } );
  };

  Asteroids.Game.prototype.checkCollisions = function() {
    var game = this;
    // debugger
    this.asteroids.forEach(function(thing1) {
      game.allNonAsteroidObjects().forEach(function(thing2) {
        if (thing1.isCollidedWith(thing2)) {
          if (thing2 instanceof Asteroids.Ship) {
            thing2.relocate();
          } else {
            game.remove(thing1);
            game.remove(thing2);
          }
        }
      } );
    } );
  };

})();
