var _call_a, _call_a2, _initStatic, _class;
const dec = () => {};
class Foo {
  static getA() {
    return babelHelpers.classStaticPrivateFieldSpecGet(this, Foo, _a);
  }
  static setA(v) {
    babelHelpers.classStaticPrivateFieldSpecSet(this, Foo, _a, v);
  }
}
_class = Foo;
function _get_a() {
  return _call_a(this);
}
function _set_a(v) {
  _call_a2(this, v);
}
var _a = {
  get: _get_a,
  set: _set_a
};
(() => {
  [_call_a, _call_a2, _initStatic] = babelHelpers.applyDecs2305(_class, [[dec, 11, "a", function () {
    return this.value;
  }], [dec, 12, "a", function (v) {
    this.value = v;
  }]], []).e;
  _initStatic(_class);
})();
babelHelpers.defineProperty(Foo, "value", 1);
