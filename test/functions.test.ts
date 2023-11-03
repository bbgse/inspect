/* eslint-disable prefer-arrow-callback */
import { expect, describe, it } from "vitest";
import inspect from "../src";

describe("functions", () => {
  it("returns the functions name wrapped in `[Function ]`", () => {
    expect(inspect(function foo() {})).toBe("[Function foo]");
  });

  it("returns the `[Function]` if given anonymous function", () => {
    expect(inspect(function () {})).toBe("[Function <anonymous>]");
  });

  describe("truncate", () => {
    it("returns the full representation when truncate is over string length", () => {
      expect(inspect(function foobar() {}, { truncate: 17 })).toBe(
        "[Function foobar]",
      );
    });

    it("truncates function names longer than truncate (16)", () => {
      expect(inspect(function foobar() {}, { truncate: 16 })).toBe(
        "[Function foob…]",
      );
    });

    it("truncates function names longer than truncate (15)", () => {
      expect(inspect(function foobar() {}, { truncate: 15 })).toBe(
        "[Function foo…]",
      );
    });
    it("truncates function names longer than truncate (14)", () => {
      expect(inspect(function foobar() {}, { truncate: 14 })).toBe(
        "[Function fo…]",
      );
    });

    it("truncates function names longer than truncate (13)", () => {
      expect(inspect(function foobar() {}, { truncate: 13 })).toBe(
        "[Function f…]",
      );
    });

    it("truncates function names longer than truncate (12)", () => {
      expect(inspect(function foobar() {}, { truncate: 12 })).toBe(
        "[Function …]",
      );
    });

    it("truncates function names longer than truncate (11)", () => {
      expect(inspect(function foobar() {}, { truncate: 11 })).toBe(
        "[Function …]",
      );
    });

    it("does not truncate decoration even when truncate is short (4)", () => {
      expect(inspect(function foobar() {}, { truncate: 4 })).toBe(
        "[Function …]",
      );
    });

    it("does not truncate decoration even when truncate is short (3)", () => {
      expect(inspect(function foobar() {}, { truncate: 3 })).toBe(
        "[Function …]",
      );
    });

    it("does not truncate decoration even when truncate is short (2)", () => {
      expect(inspect(function foobar() {}, { truncate: 2 })).toBe(
        "[Function …]",
      );
    });

    it("does not truncate decoration even when truncate is short (1)", () => {
      expect(inspect(function foobar() {}, { truncate: 1 })).toBe(
        "[Function …]",
      );
    });

    it("does not truncate decoration even when truncate is short (0)", () => {
      expect(inspect(function foobar() {}, { truncate: 0 })).toBe(
        "[Function …]",
      );
    });
  });
});
