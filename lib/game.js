(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  var Game = window.Asteroids.Game = function () {
    this.xDim = window.innerWidth;
    this.yDim = window.innerHeight;
    this.addAsteroids();
  };

  Game.NUM_ASTEROIDS = 40;

  Game.prototype.addAsteroids = function() {
    this.asteroids = [];
    this.ship = new Asteroids.Ship(this);
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(
        new Asteroids.Asteroid(this.randomPosition(), this)
      );
    }
  };

  Game.prototype.randomPosition = function () {
    var x = Math.random() * this.xDim;
    var y = Math.random() * this.yDim;
    return [x, y];
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.xDim, this.yDim);
    var objs = this.allObjects();
    objs.forEach(function (obj){
      obj.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    var objs = this.allObjects();
    objs.forEach(function (obj){
      obj.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    if (pos[0] > this.xDim) {
      pos[0] -= this.xDim;
    } else if (pos[0] < 0) {
      pos[0] += this.xDim;
    }
    if (pos[1] > this.yDim) {
      pos[1] -= this.yDim;
    } else if (pos[1] < 0) {
      pos[1] += this.yDim;
    }
    return pos;
  };

  Game.prototype.checkCollisions = function() {
    game = this;
    var objs = this.allObjects();
    objs.forEach(function(obj){
      objs.forEach(function(otherObj){
        if (obj.isCollidedWith(otherObj) &&
          obj.pos !== otherObj.pos){

          obj.collideWith(otherObj);
        }
      });
    });
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(asteroid) {
    var asteroidIndex = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(asteroidIndex, 1);
  };

  Game.prototype.allObjects = function() {
    var allObjs = [];
    allObjs = allObjs.concat(this.asteroids);
    allObjs.push(this.ship);
    console.log(allObjs);
    return allObjs;
  };



})();
