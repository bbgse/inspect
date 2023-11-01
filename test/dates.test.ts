import { expect, describe, it } from "vitest";
import inspect from "../src";

describe("date", () => {
  it("returns date in iso format", () => {
    expect(inspect(new Date(1475318637123))).toBe(
      "2016-10-01T10:43:57.123Z",
    );
  });

  it('returns "Invalid Date" if given an invalid Date object', () => {
    // See: https://github.com/chaijs/loupe/issues/58
    expect(inspect(new Date("not a date"))).toBe("Invalid Date");
  });

  describe("colors", () => {
    it("returns date with red color, if colour is set to true", () => {
      expect(inspect(new Date(1475318637123), { colors: true })).toBe(
        "\u001b[35m2016-10-01T10:43:57.123Z\u001b[39m",
      );
    });
  });

  describe("truncate", () => {
    it("returns the full representation when truncate is over string length", () => {
      expect(inspect(new Date(1475318637123), { truncate: 24 })).toBe(
        "2016-10-01T10:43:57.123Z",
      );
    });

    it("truncates strings longer than truncate (23)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 23 })).toBe(
        "2016-10-01T10:43:57.12…",
      );
    });

    it("truncates strings longer than truncate (22)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 22 })).toBe(
        "2016-10-01T10:43:57.1…",
      );
    });

    it("truncates strings longer than truncate (21)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 21 })).toBe(
        "2016-10-01T10:43:57.…",
      );
    });

    it("truncates strings longer than truncate (20)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 20 })).toBe(
        "2016-10-01T10:43:57…",
      );
    });

    it("truncates strings longer than truncate (19)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 19 })).toBe(
        "2016-10-01T10:43:5…",
      );
    });

    it("truncates strings longer than truncate (18)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 18 })).toBe(
        "2016-10-01T10:43:…",
      );
    });

    it("truncates strings longer than truncate (17)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 17 })).toBe(
        "2016-10-01T10:43…",
      );
    });

    it("truncates strings longer than truncate (16)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 16 })).toBe(
        "2016-10-01T10:4…",
      );
    });

    it("truncates strings longer than truncate (15)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 15 })).toBe(
        "2016-10-01T10:…",
      );
    });

    it("truncates strings longer than truncate (14)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 14 })).toBe(
        "2016-10-01T10…",
      );
    });

    it("truncates strings longer than truncate (13)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 13 })).toBe(
        "2016-10-01T1…",
      );
    });

    it("truncates strings longer than truncate (12)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 12 })).toBe(
        "2016-10-01T…",
      );
    });

    it("does not truncate past the date value with low truncate values (11)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 11 })).toBe(
        "2016-10-01T…",
      );
    });

    it("does not truncate past the date value with low truncate values (10)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 10 })).toBe(
        "2016-10-01T…",
      );
    });

    it("does not truncate past the date value with low truncate values (9)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 9 })).toBe(
        "2016-10-01T…",
      );
    });

    it("does not truncate past the date value with low truncate values (8)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 8 })).toBe(
        "2016-10-01T…",
      );
    });

    it("does not truncate past the date value with low truncate values (7)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 7 })).toBe(
        "2016-10-01T…",
      );
    });

    it("does not truncate past the date value with low truncate values (6)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 6 })).toBe(
        "2016-10-01T…",
      );
    });

    it("does not truncate past the date value with low truncate values (5)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 5 })).toBe(
        "2016-10-01T…",
      );
    });

    it("does not truncate past the date value with low truncate values (4)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 4 })).toBe(
        "2016-10-01T…",
      );
    });

    it("does not truncate past the date value with low truncate values (3)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 3 })).toBe(
        "2016-10-01T…",
      );
    });

    it("does not truncate past the date value with low truncate values (2)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 2 })).toBe(
        "2016-10-01T…",
      );
    });

    it("does not truncate past the date value with low truncate values (1)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 1 })).toBe(
        "2016-10-01T…",
      );
    });

    it("does not truncate past the date value with low truncate values (0)", () => {
      expect(inspect(new Date(1475318637123), { truncate: 0 })).toBe(
        "2016-10-01T…",
      );
    });
  });
});
