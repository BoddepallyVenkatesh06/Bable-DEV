var _initStatic, _class;
const dec = () => {};
class Foo {
  static get a() {
    return this.value;
  }
  static set a(v) {
    this.value = v;
  }
  static get ['b']() {
    return this.value;
  }
  static set ['b'](v) {
    this.value = v;
  }
}
_class = Foo;
(() => {
  [_initStatic] = babelHelpers.applyDecs(_class, [[dec, 8, "a"], [dec, 9, "a"], [dec, 8, 'b'], [dec, 9, 'b']], []);
  _initStatic(_class);
})();
babelHelpers.defineProperty(Foo, "value", 1);