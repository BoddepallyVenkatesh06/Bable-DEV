var _class;
let x, y, z;
class C {}
_class = C;
var _x = {
  writable: true,
  value: void 0
};
(() => {
  var _p, _p2, _m;
  [{
    y
  }, _p, ..._p2] = [{
    y: 1
  }, _class], _m = babelHelpers.classStaticPrivateFieldSpecGet(_p, _class, _x), x = _m === void 0 ? y : _m, z = _p2;
})();
