import { expect, describe, it } from "vitest";
import inspect from "../src";

describe("symbols", () => {
  /* eslint-disable */
  it("returns Symbol() for empty Symbol", () => {
    expect(inspect(Symbol())).toBe("Symbol()");
  });

  it("returns string wrapped in quotes", () => {
    expect(inspect("abc")).toBe("'abc'");
  });

  it("escapes single quotes", () => {
    expect(inspect("ab'c")).toBe("'ab\\'c'");
  });

  it("does not escape double quotes", () => {
    expect(inspect('ab"c')).toBe("'ab\"c'");
  });

  it("escapes unicode characters", () => {
    expect(inspect("\u001b")).toBe("'\\u001b'");
  });
});
