(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = window.Asteroids.MovingObject = function (args) {
    this.pos = args["pos"];
    this.vel = args["vel"];
    this.radius = args["radius"];
    this.color = args["color"];
    this.game = args["game"];
  };

  MovingObject.prototype.draw = function(ctx){
    ctx.fillstyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var a = this.pos[0] - otherObject.pos[0];
    var b = this.pos[1] - otherObject.pos[1];
    var distance = Math.sqrt(a*a + b*b);

    if (distance < (this.radius + otherObject.radius)){
      return true;
    } else {
      return false;
    }
  };

  MovingObject.prototype.collideWith = function(otherObject) {
    if (this.isCollidedWith(otherObject)) {
      this.game.remove(this);
      otherObject.game.remove(otherObject);
    }
  };


})();
