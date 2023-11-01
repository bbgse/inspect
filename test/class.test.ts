import { expect, describe, it } from "vitest";
import inspect from "../src";

describe("classes", () => {
  class Foo {}
  it("returns constructor name with object literal notation for an empty class", () => {
    expect(inspect(new Foo())).toBe("Foo{}");
  });

  it("returns `<Anonymous Class>{}` for anonymous classes", () => {
    const anon = () => class {};
    expect(inspect(new (anon())())).toBe("<Anonymous Class>{}");
  });

  it("returns toStringTag value as name if present", () => {
    class Bar {
      get [Symbol.toStringTag]() {
        return "Baz";
      }
    }
    const bar = new Bar();
    expect(inspect(bar)).toBe("Baz{}");
  });

  describe("properties", () => {
    it("inspects and outputs properties ", () => {
      const foo: any = new Foo();
      foo.bar = 1;
      foo.baz = "hello";
      expect(inspect(foo)).toBe("Foo{ bar: 1, baz: 'hello' }");
    });

    it("inspects and outputs Symbols", () => {
      const foo: any = new Foo();
      foo[Symbol("foo")] = 1;
      expect(inspect(foo)).toBe("Foo{ [Symbol(foo)]: 1 }");
    });
  });
});
