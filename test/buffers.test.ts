import { expect, describe, it, beforeEach } from "vitest";
import inspect from "../src";

describe("buffers", () => {
  it("returns `Buffer[]` for empty arrays", () => {
    expect(inspect(Buffer.from(""))).toBe("Buffer[]");
  });

  it("returns a populated buffer", () => {
    expect(inspect(Buffer.from([2, 3, 4]))).toBe("Buffer[ 2, 3, 4 ]");
  });

  describe("truncate", () => {
    it("returns the full representation when truncate is over string length", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 21 })).toBe(
        "Buffer[ 1, 2, 3 ]",
      );
    });

    it("truncates array values longer than truncate (20)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 20 })).toBe(
        "Buffer[ 1, 2, 3 ]",
      );
    });

    it("truncates array values longer than truncate (19)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 19 })).toBe(
        "Buffer[ 1, …(2) ]",
      );
    });

    it("truncates array values longer than truncate (18)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 18 })).toBe(
        "Buffer[ 1, …(2) ]",
      );
    });

    it("truncates array values longer than truncate (17)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 17 })).toBe(
        "Buffer[ 1, …(2) ]",
      );
    });

    it("truncates array values longer than truncate (16)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 16 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (15)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 15 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (14)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 14 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (13)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 13 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (12)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 12 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (11)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 11 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (10)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 10 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (9)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 9 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (8)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 8 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (8)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 8 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (8)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 8 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (7)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 7 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (6)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 6 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (5)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 5 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (4)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 4 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (3)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 3 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (2)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 2 })).toBe(
        "Buffer[ …(3) ]",
      );
    });

    it("truncates array values longer than truncate (1)", () => {
      expect(inspect(Buffer.from([1, 2, 3]), { truncate: 1 })).toBe(
        "Buffer[ …(3) ]",
      );
    });
  });
});
