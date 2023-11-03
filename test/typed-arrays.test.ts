import { describe, expect, it } from "vitest";
import inspect from "../src";

describe("typed arrays", () => {
  const types = [Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray];
  it.each(types)(
    "returns `${TypedArray.name}[]` for empty arrays",
    (TypedArray) => {
      expect(inspect(new TypedArray())).toBe(`${TypedArray.name}[]`);
    }
  );

  describe("truncate", () => {
    it.each(types)(
      "returns the full representation when truncate is over string length",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 40 })).toBe(
          `${TypedArray.name}[ 1, 2, 3 ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (20)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 20 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (19)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 19 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (18)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 18 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (17)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 17 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (16)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 16 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (15)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 15 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (14)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 14 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (13)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 13 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (12)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 12 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (11)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 11 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (10)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 10 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (9)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 9 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (8)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 8 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (8)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 8 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (8)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 8 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (7)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 7 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (6)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 6 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (5)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 5 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (4)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 4 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (3)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 3 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (2)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 2 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );

    it.each(types)(
      "truncates array values longer than truncate (1)",
      (TypedArray) => {
        expect(inspect(new TypedArray([1, 2, 3]), { truncate: 1 })).toBe(
          `${TypedArray.name}[ …(3) ]`
        );
      }
    );
  });

  describe("non-integer properties", () => {
    it.each(types)(
      "outputs non-integer properties right after standard list items",
      (TypedArray) => {
        const arr: any = new TypedArray([1, 2, 3]);
        arr.foo = "bar";
        expect(inspect(arr)).toBe(`${TypedArray.name}[ 1, 2, 3, foo: 'bar' ]`);
      }
    );
  });
});
