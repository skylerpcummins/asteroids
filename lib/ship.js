(function() {
  if (typeof Asteroids === 'undefined'){
    window.Asteroids = {};
  }

  var Ship = window.Asteroids.Ship = function (game) {
    Asteroids.MovingObject.call(
      this,
      {pos: [(game.xDim / 2), (game.yDim / 3)],
      vel: Asteroids.Util.randomVec(0),
      radius: 30,
      color: "red",
      game: game});
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);


})();
