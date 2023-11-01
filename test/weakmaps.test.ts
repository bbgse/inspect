import { expect, describe, it } from "vitest";
import inspect from "../src";

describe("weakmaps", () => {
  it("returns `WeakMap{…}` for WeakMap", () => {
    expect(inspect(new WeakMap())).toBe("WeakMap{…}");
  });

  describe("truncate", () => {
    it("returns the full representation when truncate is over string length", () => {
      expect(inspect(new WeakMap(), { truncate: 20 })).toBe("WeakMap{…}");
      expect(inspect(new WeakMap(), { truncate: 10 })).toBe("WeakMap{…}");
      expect(inspect(new WeakMap(), { truncate: 1 })).toBe("WeakMap{…}");
    });
  });
});
