import { expect, describe, it } from "vitest";
import inspect from "../src";

describe("arrays", () => {
  it("truncates an array of strings rather than just the strings", () => {
    expect(inspect(["foo", "bar", "baz", "bing"], { truncate: 22 })).toBe(
      "[ 'foo', 'bar', …(2) ]",
    );
  });

  it("truncates the string in certain cases, to keep under the truncate threshold", () => {
    expect(inspect(["foobarbazbing"], { truncate: 15 })).toBe(
      "[ 'foobarba…' ]",
    );
  });
});

describe("objects", () => {
  it("correctly inspects Symbols as object keys", () => {
    expect(inspect({ [Symbol("foo")]: 1 })).toBe("{ [Symbol(foo)]: 1 }");
  });

  it("correctly inspects properties and Symbols as object keys", () => {
    expect(inspect({ foo: 1, [Symbol("foo")]: 1 })).toBe(
      "{ foo: 1, [Symbol(foo)]: 1 }",
    );
  });

  it("does not use custom inspect functions if `customInspect` is turned off", () => {
    const obj = {
      inspect: () => 1,
    };
    expect(inspect(obj, { customInspect: false })).toBe(
      "{ inspect: [Function inspect] }",
    );
  });

  it("uses custom inspect function is `customInspect` is turned on", () => {
    const obj = {
      inspect: () => 1,
    };
    expect(inspect(obj, { customInspect: true })).toBe("1");
  });

  it("does not use custom inspect functions if `customInspect` is turned off", () => {
    const obj = {
      inspect: () => 1,
    };
    expect(inspect(obj, { customInspect: false })).toBe(
      "{ inspect: [Function inspect] }",
    );
  });

  it("uses custom inspect function if `customInspect` is turned on", () => {
    const obj = {
      inspect: () => "abc",
    };
    expect(inspect(obj, { customInspect: true })).toBe("abc");
  });

  it("inspects custom inspect function result", () => {
    const obj = {
      inspect: () => ["foobarbazbing"],
    };
    expect(inspect(obj, { customInspect: true, truncate: 15 })).toBe(
      "[ 'foobarba…' ]",
    );
  });

  it("inspect with custom object-returning inspect", () => {
    const obj = {
      sub: {
        inspect: () => ({ foo: "bar" }),
      },
    };

    expect(inspect(obj, { customInspect: true })).toBe(
      "{ sub: { foo: 'bar' } }",
    );
  });
});

describe("arrays", () => {
  it("can contain anonymous functions", () => {
    expect(inspect([() => 1])).toBe("[ [Function <anonymous>] ]");
  });
});
