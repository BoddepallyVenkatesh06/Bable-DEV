var _init_a, _init_b, _init_computedKey, _class;
const dec = () => {};
class Foo {
  constructor() {
    babelHelpers.defineProperty(this, "a", _init_a(this));
    babelHelpers.defineProperty(this, "b", _init_b(this, 123));
    babelHelpers.defineProperty(this, 'c', _init_computedKey(this, 456));
  }
}
_class = Foo;
[_init_a, _init_b, _init_computedKey] = babelHelpers.applyDecs2301(_class, [[dec, 0, "a"], [dec, 0, "b"], [dec, 0, 'c']], []).e;
