var _call_a, _computedKey, _initStatic, _class;
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
  static get a() {}
  static get "b"() {}
  static get ["c"]() {}
  static get 0() {}
  static get [1]() {}
  static get 2n() {}
  static get [3n]() {}
  static get [_computedKey]() {}
}
_class = Foo;
function _get_a() {
  return _call_a(this);
}
var _a = {
  get: _get_a,
  set: void 0
};
(() => {
  [_call_a, _initStatic] = babelHelpers.applyDecs2305(_class, [[dec, 11, "a"], [dec, 11, "a", function () {}], [dec, 11, "b"], [dec, 11, "c"], [dec, 11, 0], [dec, 11, 1], [dec, 11, 2n], [dec, 11, 3n], [dec, 11, _computedKey]], []).e;
  _initStatic(_class);
})();
expect(logs).toStrictEqual(["computing f", "calling toPrimitive", "a", "#a", "b", "c", "0", "1", "2", "3", "f()"]);
