function dec(get, context) {
  context.addInitializer(function() {
    this[context.name + 'Context'] = context;
  });

  expect(get.name).toEqual("get " + context.name);
  return function () {
    return get.call(this) + 1;
  }
}

class Foo {
  static value = 1;

  @dec
  static get a() {
    return this.value;
  }

  @dec
  static get ['b']() {
    return this.value;
  }
}

const aContext = Foo['aContext'];
const bContext = Foo['bContext'];

expect(Foo.a).toBe(2);
expect(Foo.b).toBe(2);
Foo.value = 123;
expect(Foo.a).toBe(124);
expect(Foo.b).toBe(124);

expect(aContext.name).toBe('a');
expect(aContext.kind).toBe('getter');
expect(aContext.isStatic).toBe(true);
expect(aContext.isPrivate).toBe(false);
expect(typeof aContext.addInitializer).toBe('function');
expect(typeof aContext.setMetadata).toBe('function');
expect(typeof aContext.getMetadata).toBe('function');

expect(bContext.name).toBe('b');
expect(bContext.kind).toBe('getter');
expect(bContext.isStatic).toBe(true);
expect(bContext.isPrivate).toBe(false);
expect(typeof bContext.addInitializer).toBe('function');
expect(typeof bContext.setMetadata).toBe('function');
expect(typeof bContext.getMetadata).toBe('function');
