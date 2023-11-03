import { expect, describe, it } from "vitest";
import inspect from "../src";

function args(...args: any[]) {
  return arguments;
}

describe("arguments", () => {
  it("returns `Arguments{}` for empty arguments", () => {
    expect(inspect(args())).toBe("Arguments[]");
  });

  describe("truncate", () => {
    it("returns the full representation when truncate is over string length", () => {
      expect(inspect(args(1, 2, 3), { truncate: 20 })).toBe(
        "Arguments[ 1, 2, 3 ]",
      );
    });

    it("truncates arguments values longer than truncate (19)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 19 })).toBe(
        "Arguments[ …(3) ]",
      );
    });

    it("truncates arguments values longer than truncate (18)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 18 })).toBe(
        "Arguments[ …(3) ]",
      );
    });

    it("truncates arguments values longer than truncate (17)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 17 })).toBe(
        "Arguments[ …(3) ]",
      );
    });

    it("truncates arguments values longer than truncate (16)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 16 })).toBe(
        "Arguments[ …(3) ]",
      );
    });
    it("truncates arguments values longer than truncate (15)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 15 })).toBe(
        "Arguments[ …(3) ]",
      );
    });
    it("truncates arguments values longer than truncate (14)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 14 })).toBe(
        "Arguments[ …(3) ]",
      );
    });
    it("truncates arguments values longer than truncate (13)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 13 })).toBe(
        "Arguments[ …(3) ]",
      );
    });
    it("truncates arguments values longer than truncate (12)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 12 })).toBe(
        "Arguments[ …(3) ]",
      );
    });
    it("truncates arguments values longer than truncate (11)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 11 })).toBe(
        "Arguments[ …(3) ]",
      );
    });
    it("truncates arguments values longer than truncate (10)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 10 })).toBe(
        "Arguments[ …(3) ]",
      );
    });
    it("truncates arguments values longer than truncate (9)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 9 })).toBe("Arguments[ …(3) ]");
    });
    it("truncates arguments values longer than truncate (8)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 8 })).toBe("Arguments[ …(3) ]");
    });
    it("truncates arguments values longer than truncate (7)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 7 })).toBe("Arguments[ …(3) ]");
    });
    it("truncates arguments values longer than truncate (6)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 6 })).toBe("Arguments[ …(3) ]");
    });
    it("truncates arguments values longer than truncate (5)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 5 })).toBe("Arguments[ …(3) ]");
    });
    it("truncates arguments values longer than truncate (4)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 4 })).toBe("Arguments[ …(3) ]");
    });
    it("truncates arguments values longer than truncate (3)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 3 })).toBe("Arguments[ …(3) ]");
    });
    it("truncates arguments values longer than truncate (2)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 2 })).toBe("Arguments[ …(3) ]");
    });
    it("truncates arguments values longer than truncate (1)", () => {
      expect(inspect(args(1, 2, 3), { truncate: 1 })).toBe("Arguments[ …(3) ]");
    });
  });
});
