class Foo {
  constructor() {
    var _newtarget = this.constructor,
      _class2;
    babelHelpers.defineProperty(this, "test", function _target() {
      this instanceof _target ? this.constructor : void 0;
    });
    babelHelpers.defineProperty(this, "test2", function () {
      _newtarget;
    });
    this.Bar = (_class2 = class {
      constructor() {
        // should not replace
        babelHelpers.defineProperty(this, "q", this.constructor);
      } // should not replace
    }, babelHelpers.defineProperty(_class2, "p", void 0), babelHelpers.defineProperty(_class2, "p1", class {
      constructor() {
        this.constructor;
      }
    }), babelHelpers.defineProperty(_class2, "p2", new function _target2() {
      this instanceof _target2 ? this.constructor : void 0;
    }()), babelHelpers.defineProperty(_class2, "p3", function () {
      void 0;
    }), babelHelpers.defineProperty(_class2, "p4", function _target3() {
      this instanceof _target3 ? this.constructor : void 0;
    }), _class2);
  }
}
