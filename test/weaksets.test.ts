import { expect, describe, it } from "vitest";
import inspect from "../src";

describe("weaksets", () => {
  it("returns `WeakSet{…}` for WeakSet", () => {
    expect(inspect(new WeakSet())).toBe("WeakSet{…}");
  });

  describe("truncate", () => {
    it("returns the full representation when truncate is over string length", () => {
      expect(inspect(new WeakSet(), { truncate: 20 })).toBe("WeakSet{…}");
      expect(inspect(new WeakSet(), { truncate: 10 })).toBe("WeakSet{…}");
      expect(inspect(new WeakSet(), { truncate: 1 })).toBe("WeakSet{…}");
    });
  });
});
