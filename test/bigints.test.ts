import { expect, describe, it } from "vitest";
import inspect from "../src";

describe("bigints", () => {
  it("returns number as passed in", () => {
    expect(inspect(BigInt(1))).toBe("1n");
    expect(inspect(BigInt(0))).toBe("0n");
  });

  it("uses scientific notation where possible", () => {
    expect(inspect(1e300)).toBe("1e+300");
  });

  describe("truncate", () => {
    it("returns the full representation when truncate is over string length", () => {
      expect(inspect(BigInt(3141592654), { truncate: 11 })).toBe("3141592654n");
    });

    it("truncates numbers longer than truncate (10)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 10 })).toBe("31415926…n");
    });

    it("truncates numbers longer than truncate (9)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 9 })).toBe("3141592…n");
    });
    it("truncates numbers longer than truncate (8)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 8 })).toBe("314159…n");
    });

    it("truncates numbers longer than truncate (7)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 7 })).toBe("31415…n");
    });

    it("truncates numbers longer than truncate (6)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 6 })).toBe("3141…n");
    });

    it("truncates numbers longer than truncate (5)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 5 })).toBe("314…n");
    });

    it("truncates numbers longer than truncate (4)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 4 })).toBe("31…n");
    });

    it("truncates numbers longer than truncate (3)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 3 })).toBe("3…n");
    });

    it("truncates numbers longer than truncate (2)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 2 })).toBe("…");
    });

    it("truncates numbers longer than truncate (1)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 1 })).toBe("…");
    });

    it("disregards truncate when it cannot truncate further (0)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 0 })).toBe("…");
    });

    it("does not truncate if tail is same length as value", () => {
      expect(inspect(BigInt(3), { truncate: 0 })).toBe("3n");
    });
  });
});
