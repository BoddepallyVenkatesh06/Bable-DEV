var _class;
class Base {
  superMethod() {
    return 'good';
  }
}
var _privateMethod = /*#__PURE__*/new WeakSet();
class Sub extends Base {
  constructor(...args) {
    super(...args);
    babelHelpers.classPrivateMethodInitSpec(this, _privateMethod);
  }
  superMethod() {
    return 'bad';
  }
  publicMethod() {
    return babelHelpers.classPrivateMethodGet(this, _privateMethod, _privateMethod2).call(this);
  }
}
_class = Sub;
function _privateMethod2() {
  return babelHelpers.get(babelHelpers.getPrototypeOf(_class.prototype), "superMethod", this).call(this);
}
