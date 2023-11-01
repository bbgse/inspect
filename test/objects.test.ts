import { inspect } from "../src";
import { expect, describe, it } from "vitest";

describe("objects", () => {
  it("returns `{}` for empty objects", () => {
    expect(inspect({})).toBe("{}");
  });

  it("quotes a key if it contains special chars", () => {
    expect(inspect({ "a.b": 1 })).toBe("{ 'a.b': 1 }");
    expect(inspect({ "a b": 1 })).toBe("{ 'a b': 1 }");
  });

  it("quotes a key if it is empty", () => {
    expect(inspect({ "": 1 })).toBe("{ '': 1 }");
  });

  it("quotes a key if it contains a single quote", () => {
    expect(inspect({ "'": 1 })).toBe("{ '\\'': 1 }");
  });

  it("quotes a key if it contains a double quote", () => {
    expect(inspect({ '"': 1 })).toBe("{ '\"': 1 }");
  });

  it("detects circular references", () => {
    const main: any = {};
    main.a = main;
    expect(inspect(main)).toBe("{ a: [Circular] }");
  });

  it("returns `{}` for empty objects with an anonoymous prototype", () => {
    expect(inspect(Object.create({ a: 1 }))).toBe("{}");
  });

  it("returns `{}` for empty objects with a null prototype", () => {
    expect(inspect(Object.create(Object.create(null)))).toBe("{}");
  });

  it("shows objects' own properties for objects with an anonoymous prototype", () => {
    const obj = Object.create({ a: 1 });
    obj.b = 2;
    expect(inspect(obj)).toBe("{ b: 2 }");
  });

  describe("truncate", () => {
    it("returns the full representation when truncate is over string length", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 20 })).toBe(
        "{ a: 1, b: 2, c: 3 }"
      );
    });

    it("truncates object values longer than truncate (19)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 19 })).toBe(
        "{ a: 1, …(2) }"
      );
    });

    it("truncates object values longer than truncate (18)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 18 })).toBe(
        "{ a: 1, …(2) }"
      );
    });

    it("truncates object values longer than truncate (17)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 17 })).toBe(
        "{ a: 1, …(2) }"
      );
    });

    it("truncates object values longer than truncate (16)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 16 })).toBe(
        "{ a: 1, …(2) }"
      );
    });

    it("truncates object values longer than truncate (15)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 15 })).toBe(
        "{ a: 1, …(2) }"
      );
    });

    it("truncates object values longer than truncate (14)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 14 })).toBe(
        "{ a: 1, …(2) }"
      );
    });

    it("truncates object values longer than truncate (13)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 13 })).toBe(
        "{ …(3) }"
      );
    });

    it("truncates object values longer than truncate (12)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 12 })).toBe(
        "{ …(3) }"
      );
    });

    it("truncates object values longer than truncate (11)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 11 })).toBe(
        "{ …(3) }"
      );
    });

    it("truncates object values longer than truncate (10)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 10 })).toBe(
        "{ …(3) }"
      );
    });

    it("truncates object values longer than truncate (9)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 9 })).toBe(
        "{ …(3) }"
      );
    });

    it("truncates object values longer than truncate (8)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 8 })).toBe(
        "{ …(3) }"
      );
    });

    it("truncates object values longer than truncate (7)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 7 })).toBe(
        "{ …(3) }"
      );
    });

    it("truncates object values longer than truncate (6)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 6 })).toBe(
        "{ …(3) }"
      );
    });

    it("truncates object values longer than truncate (5)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 5 })).toBe(
        "{ …(3) }"
      );
    });

    it("truncates object values longer than truncate (4)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 4 })).toBe(
        "{ …(3) }"
      );
    });

    it("truncates object values longer than truncate (3)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 3 })).toBe(
        "{ …(3) }"
      );
    });

    it("truncates object values longer than truncate (2)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 2 })).toBe(
        "{ …(3) }"
      );
    });

    it("truncates object values longer than truncate (1)", () => {
      expect(inspect({ a: 1, b: 2, c: 3 }, { truncate: 1 })).toBe(
        "{ …(3) }"
      );
    });
  });
});
