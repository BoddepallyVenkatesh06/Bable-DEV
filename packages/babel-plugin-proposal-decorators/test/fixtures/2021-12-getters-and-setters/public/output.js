var _initProto;
const dec = () => {};
class Foo {
  static {
    [_initProto] = babelHelpers.applyDecs(this, [[dec, 3, "a"], [dec, 4, "a"], [dec, 3, 'b'], [dec, 4, 'b']], []);
  }
  constructor(...args) {
    _initProto(this);
  }
  value = 1;
  get a() {
    return this.value;
  }
  set a(v) {
    this.value = v;
  }
  get ['b']() {
    return this.value;
  }
  set ['b'](v) {
    this.value = v;
  }
}
