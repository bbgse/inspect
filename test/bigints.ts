import { expect } from "chai";
import inspect from "../src";

describe("bigints", () => {
  it("returns number as passed in", () => {
    expect(inspect(BigInt(1))).to.equal("1n");
    expect(inspect(BigInt(0))).to.equal("0n");
  });

  it("uses scientific notation where possible", () => {
    expect(inspect(1e300)).to.equal("1e+300");
  });

  describe("colors", () => {
    it("returns string with yellow color, if colour is set to true", () => {
      expect(inspect(BigInt(1), { colors: true })).to.equal("\u001b[33m1n\u001b[39m");
    });
  });

  describe("truncate", () => {
    it("returns the full representation when truncate is over string length", () => {
      expect(inspect(BigInt(3141592654), { truncate: 11 })).to.equal("3141592654n");
    });

    it("truncates numbers longer than truncate (10)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 10 })).to.equal("31415926…n");
    });

    it("truncates numbers longer than truncate (9)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 9 })).to.equal("3141592…n");
    });
    it("truncates numbers longer than truncate (8)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 8 })).to.equal("314159…n");
    });

    it("truncates numbers longer than truncate (7)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 7 })).to.equal("31415…n");
    });

    it("truncates numbers longer than truncate (6)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 6 })).to.equal("3141…n");
    });

    it("truncates numbers longer than truncate (5)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 5 })).to.equal("314…n");
    });

    it("truncates numbers longer than truncate (4)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 4 })).to.equal("31…n");
    });

    it("truncates numbers longer than truncate (3)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 3 })).to.equal("3…n");
    });

    it("truncates numbers longer than truncate (2)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 2 })).to.equal("…");
    });

    it("truncates numbers longer than truncate (1)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 1 })).to.equal("…");
    });

    it("disregards truncate when it cannot truncate further (0)", () => {
      expect(inspect(BigInt(3141592654), { truncate: 0 })).to.equal("…");
    });

    it("does not truncate if tail is same length as value", () => {
      expect(inspect(BigInt(3), { truncate: 0 })).to.equal("3n");
    });
  });
});
