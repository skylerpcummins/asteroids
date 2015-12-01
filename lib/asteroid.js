(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = window.Asteroids.Asteroid = function (pos, game) {
    Asteroids.MovingObject.call(
      this,
      {pos: pos,
      vel: Asteroids.Util.randomVec(10),
      radius: 30,
      color: "#00FF00",
      game: game}
    );
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);



})();
