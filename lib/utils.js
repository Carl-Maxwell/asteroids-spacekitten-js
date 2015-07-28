(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};
  Asteroids.Util = {
    inherits: function(ChildClass, BaseClass) {
      function Surrogate () {}
      Surrogate.prototype = BaseClass.prototype;
      ChildClass.prototype = new Surrogate();
      ChildClass.prototype.constructor = ChildClass;
    },
    randomVec : function (length) {
      return [Math.random() * length, Math.random() * length];
    },
    distance: function(pos1, pos2) {
      return Math.sqrt(
          Math.pow(pos1[0] - pos2[0], 2) +
          Math.pow(pos1[1] - pos2[1], 2)
        );
    }
  };
})();
