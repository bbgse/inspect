import { expect, describe, it } from "vitest";
import inspect from "../src";

describe("regexps", () => {
  it("returns regexp wrapped in forward slashes", () => {
    expect(inspect(/abc/)).toBe("/abc/");
  });

  it("detects flags and adds them after the slashes", () => {
    expect(inspect(/abc/gim)).toBe("/abc/gim");
  });

  describe("truncate", () => {
    it("returns the full representation when truncate is over string length", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 14 })).toBe("/foobarbaz/gim");
    });

    it("truncates strings longer than truncate (13)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 13 })).toBe("/foobarb…/gim");
    });

    it("truncates strings longer than truncate (12)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 12 })).toBe("/foobar…/gim");
    });
    it("truncates strings longer than truncate (11)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 11 })).toBe("/fooba…/gim");
    });

    it("truncates strings longer than truncate (10)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 10 })).toBe("/foob…/gim");
    });

    it("truncates strings longer than truncate (9)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 9 })).toBe("/foo…/gim");
    });

    it("truncates strings longer than truncate (8)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 8 })).toBe("/fo…/gim");
    });

    it("truncates strings longer than truncate (7)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 7 })).toBe("/f…/gim");
    });

    it("truncates strings longer than truncate (6)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 6 })).toBe("/…/gim");
    });

    it("disregards truncate when it cannot truncate further (5)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 5 })).toBe("/…/gim");
    });

    it("disregards truncate when it cannot truncate further (4)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 4 })).toBe("/…/gim");
    });

    it("disregards truncate when it cannot truncate further (3)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 3 })).toBe("/…/gim");
    });

    it("disregards truncate when it cannot truncate further (2)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 2 })).toBe("/…/gim");
    });

    it("disregards truncate when it cannot truncate further (1)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 1 })).toBe("/…/gim");
    });

    it("disregards truncate when it cannot truncate further (0)", () => {
      expect(inspect(/foobarbaz/gim, { truncate: 0 })).toBe("/…/gim");
    });
  });
});
