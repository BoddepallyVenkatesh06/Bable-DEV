var _call_a, _computedKey, _initStatic;
const logs = [];
const dec = (value, context) => {
  logs.push(context.name);
};
const f = () => {
  logs.push("computing f");
  return {
    [Symbol.toPrimitive]: () => (logs.push("calling toPrimitive"), "f()")
  };
};
_computedKey = babelHelpers.toPropertyKey(f());
class Foo {
  static {
    [_call_a, _initStatic] = babelHelpers.applyDecs(this, [[dec, 8, "a"], [dec, 8, "a", function () {}], [dec, 8, "b"], [dec, 8, "c"], [dec, 8, 0], [dec, 8, 1], [dec, 8, 2n], [dec, 8, 3n], [dec, 8, _computedKey]], []);
    _initStatic(this);
  }
  static get a() {}
  static get #a() {
    return _call_a(this);
  }
  static get "b"() {}
  static get ["c"]() {}
  static get 0() {}
  static get [1]() {}
  static get 2n() {}
  static get [3n]() {}
  static get [_computedKey]() {}
}
expect(logs).toStrictEqual(["computing f", "calling toPrimitive", "a", "#a", "b", "c", "0", "1", "2", "3", "f()"]);
