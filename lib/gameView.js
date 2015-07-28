(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(game, canvasEl) {
    this.game = game;
    this.ctx = canvasEl.getContext("2d");
  };

  GameView.prototype.start = function() {
    var gameview = this;
    setInterval(function() {
      gameview.game.step();
      gameview.game.draw(gameview.ctx);
      gameview.checkKeys();
    }, 20);

    this.bindKeyHandlers();
  };

  GameView.prototype.checkKeys = function() {
    var game = this.game;
    if (window.key.isPressed('w')) {
      game.ship.power(1);
    }
    if (window.key.isPressed('z')) {
      game.ship.fireBullet();
    }
    if (window.key.isPressed('a')) {
      game.ship.rot(-2);
    }
    if (window.key.isPressed('d')) {
      game.ship.rot(2);
    }
  };

})();
