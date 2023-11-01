import { expect, describe, it } from "vitest";
import inspect from "../src";

describe("errors", () => {
  it("returns `Error` for an empty Error", () => {
    expect(inspect(new Error())).toBe("Error");
  });

  it("also works with Error subclasses (TypeError)", () => {
    expect(inspect(new TypeError())).toBe("TypeError");
  });

  it("also works with Error subclasses (SyntaxError)", () => {
    expect(inspect(new SyntaxError())).toBe("SyntaxError");
  });

  it("also works with Error subclasses (ReferenceError)", () => {
    expect(inspect(new ReferenceError())).toBe("ReferenceError");
  });

  it('returns `Error{"message"}` for an Error("message")', () => {
    expect(inspect(new Error("message"))).toBe("Error: message");
  });

  describe("non-standard properties", () => {
    it("adds non standard properties to end of output", () => {
      const err: any = new Error("message");
      err.code = 404;
      expect(inspect(err)).toBe("Error: message { code: 404 }");
    });

    it("will properly inspect a non-string message property", () => {
      const err = new Error("message");
      err.message = { code: 404 } as any;
      expect(inspect(err)).toBe("Error { message: { code: 404 } }");
    });
  });
});
