var _x = /*#__PURE__*/new WeakMap();
class A {
  constructor() {
    babelHelpers.classPrivateFieldInitSpec(this, _x, {
      writable: true,
      value: void 0
    });
  }
  method() {
    var _obj, _obj2, _obj3, _obj4, _obj5, _obj6;
    (_obj = obj) === null || _obj === void 0 ? void 0 : babelHelpers.classPrivateFieldSet(_obj, _x, 1);
    (_obj2 = obj) === null || _obj2 === void 0 ? void 0 : babelHelpers.classPrivateFieldSet(_obj2, _x, babelHelpers.classPrivateFieldGet(_obj2, _x) + 2);
    (_obj3 = obj) === null || _obj3 === void 0 ? void 0 : babelHelpers.classPrivateFieldGet(_obj3, _x) ?? babelHelpers.classPrivateFieldSet(_obj3, _x, 3);
    (_obj4 = obj) === null || _obj4 === void 0 ? void 0 : babelHelpers.classPrivateFieldGet(_obj4, _x).y = 4;
    (_obj5 = obj) === null || _obj5 === void 0 ? void 0 : babelHelpers.classPrivateFieldGet(_obj5, _x).y += 5;
    (_obj6 = obj) === null || _obj6 === void 0 ? void 0 : babelHelpers.classPrivateFieldGet(_obj6, _x).y ??= 6;
  }
}
