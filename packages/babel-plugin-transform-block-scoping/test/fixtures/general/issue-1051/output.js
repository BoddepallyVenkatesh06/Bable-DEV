foo.func1 = function () {
  if (cond1) {
    var _loop = function () {
      if (cond2) {
        var func2 = function () {};
        var func3 = function () {};
        func4(function () {
          func2();
        });
        return 1; // break
      }
    };
    for (;;) {
      if (_loop()) break;
    }
  }
};
