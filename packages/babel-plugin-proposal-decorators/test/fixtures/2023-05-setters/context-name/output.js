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
    [_call_a, _initStatic] = babelHelpers.applyDecs2305(this, [[dec, 12, "a"], [dec, 12, "a", function (v) {}], [dec, 12, "b"], [dec, 12, "c"], [dec, 12, 0], [dec, 12, 1], [dec, 12, 2n], [dec, 12, 3n], [dec, 12, _computedKey]], []).e;
    _initStatic(this);
  }
  static set a(v) {}
  static set #a(v) {
    _call_a(this, v);
  }
  static set "b"(v) {}
  static set ["c"](v) {}
  static set 0(v) {}
  static set [1](v) {}
  static set 2n(v) {}
  static set [3n](v) {}
  static set [_computedKey](v) {}
}
expect(logs).toStrictEqual(["computing f", "calling toPrimitive", "a", "#a", "b", "c", "0", "1", "2", "3", "f()"]);
