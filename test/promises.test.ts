import { expect, describe, it } from "vitest";
import inspect from "../src";

describe("promises", () => {
  describe("default behaviour", () => {
    it("returns `Promise{…}` for a Promise", async () => {
      await expect(inspect(Promise.resolve(42))).resolves.toBe("Promise{42}");
    });

    it("returns `Promise{<rejected> …}` for a rejected Promise", async () => {
      await expect(inspect(Promise.reject(new Error("Foo!")))).rejects.toBe(
        "Promise{<rejected> Error: Foo!}"
      );
    });

    describe("truncate", () => {
      it("returns the full string representation regardless of truncate", async () => {
        await expect(
          inspect(Promise.resolve(42), { truncate: 9 })
        ).resolves.toBe("Promise{…}");
        await expect(
          inspect(Promise.resolve(42), { truncate: 8 })
        ).resolves.toBe("Promise{…}");
        await expect(
          inspect(Promise.resolve(42), { truncate: 7 })
        ).resolves.toBe("Promise{…}");
        await expect(
          inspect(Promise.resolve(42), { truncate: 6 })
        ).resolves.toBe("Promise{…}");
        await expect(
          inspect(Promise.resolve(42), { truncate: 5 })
        ).resolves.toBe("Promise{…}");
        await expect(
          inspect(Promise.resolve(42), { truncate: 4 })
        ).resolves.toBe("Promise{…}");
        await expect(
          inspect(Promise.resolve(42), { truncate: 3 })
        ).resolves.toBe("Promise{…}");
        await expect(
          inspect(Promise.resolve(42), { truncate: 2 })
        ).resolves.toBe("Promise{…}");
        await expect(
          inspect(Promise.resolve(42), { truncate: 1 })
        ).resolves.toBe("Promise{…}");
      });
    });
  });

  describe("node <= 16", () => {
    it("returns an inspected version of the Promise value if it has already resolved", async () => {
      await expect(inspect(Promise.resolve(42))).resolves.toBe("Promise{42}");
    });

    it('returns a "pending" version of the Promise value if it is pending', async () => {
      await expect(inspect(new Promise(() => {}))).resolves.toBe(
        "Promise{<pending>}"
      );
    });

    it('returns a "rejected" version of the Promise value if it is rejected', async () => {
      await expect(inspect(Promise.reject(new Error("Foo")))).rejects.toBe(
        "Promise{<rejected> Error: Foo}"
      );
    });
  });
});
