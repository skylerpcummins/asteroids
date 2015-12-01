(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  (function () {
    if (typeof Asteroids.Util === "undefined") {
      window.Asteroids.Util = {};
    }

    Asteroids.Util.inherits = function (ChildClass, ParentClass) {
      function Surrogate () {}
      Surrogate.prototype = ParentClass.prototype;
      ChildClass.prototype = new Surrogate();
      ChildClass.prototype.constructor = ChildClass;
    };

    Asteroids.Util.randomVec = function (length) {
      var x = ((Math.random() * 2) - 1) * length;
      var y = ((Math.random() * 2) - 1) * length;

      return [x, y];
    };


  })();
})();
