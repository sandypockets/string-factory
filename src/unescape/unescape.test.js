const { unescape } = require("../../dist");

test("returns a string type", () => {
  expect(typeof unescape("")).toBe("string");
});

test("converts escaped characters to their unescaped equivalents", () => {
  expect(unescape("&amp;")).toBe("&");
  expect(unescape("&lt;")).toBe("<");
  expect(unescape("&gt;")).toBe(">");
  expect(unescape("&quot;")).toBe('"');
  expect(unescape("&#x2F;")).toBe("/");
  expect(unescape("&#x60;")).toBe("`");
  expect(unescape("&#x27;")).toBe("'");
  expect(unescape("&#x3D;")).toBe("=");
  expect(unescape("&#x21;")).toBe("!");
  expect(unescape("&#x3F;")).toBe("?");
  expect(unescape("&#x23;")).toBe("#");
  expect(unescape("&#x5B;")).toBe("[");
  expect(unescape("&#x5D;")).toBe("]");
  expect(unescape("&#x7B;")).toBe("{");
  expect(unescape("&#x7D;")).toBe("}");
  expect(unescape("&#x5E;")).toBe("^");
  expect(unescape("&#x7E;")).toBe("~");
  expect(unescape("&#x5C;")).toBe("\\");
  expect(unescape("&#x3A;")).toBe(":");
  expect(unescape("&#x3B;")).toBe(";");
  expect(unescape("&#x2C;")).toBe(",");
  expect(unescape("&#x2E;")).toBe(".");
  expect(unescape("&#x2D;")).toBe("-");
});

test("throws an error if input is not a string", () => {
  expect(() => unescape(null)).toThrow();
  expect(() => unescape(undefined)).toThrow();
  expect(() => unescape(0)).toThrow();
  expect(() => unescape(1)).toThrow();
  expect(() => unescape(true)).toThrow();
  expect(() => unescape(false)).toThrow();
  expect(() => unescape({})).toThrow();
  expect(() => unescape([])).toThrow();
});
