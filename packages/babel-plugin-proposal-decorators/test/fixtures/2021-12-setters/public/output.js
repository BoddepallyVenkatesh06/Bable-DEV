var _initProto;
const dec = () => {};
class Foo {
  static {
    [_initProto] = babelHelpers.applyDecs(this, [[dec, 4, "a"], [dec, 4, 'b']], []);
  }
  constructor(...args) {
    _initProto(this);
  }
  value = 1;
  set a(v) {
    return this.value = v;
  }
  set ['b'](v) {
    return this.value = v;
  }
}
