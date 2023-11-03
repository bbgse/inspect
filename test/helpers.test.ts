import { expect, describe, it, test } from "vitest";
import { isClass, isInstanceOfClass } from "../src/helpers";

class Foo {}
const foo = new Foo();

function Baz(this: any) {}
// @ts-ignore
const baz = new Baz();

describe("helpers", () => {
  describe("isClass", () => {
    it("returns true for a class", () => {
      expect(isClass(Foo)).toBe(true);
    });
    it("returns false for a class instance", () => {
      expect(isClass(foo)).toBe(false);
    });

    it("returns false for a function", () => {
      expect(isClass(Baz)).toBe(false);
    });
    it("returns false for a function instance", () => {
      expect(isClass(baz)).toBe(false);
    });
  });

  describe("isInstanceOfClass", () => {
    it("returns false for a class", () => {
      expect(isInstanceOfClass(Foo)).toBe(false);
    });
    it("returns true for a class instance", () => {
      expect(isInstanceOfClass(foo)).toBe(true);
    });

    it("returns false for a function", () => {
      expect(isInstanceOfClass(Baz)).toBe(false);
    });
    it("returns false for a function instance", () => {
      expect(isInstanceOfClass(baz)).toBe(false);
    });
  });
});
