const { downCase } = require("../../dist");

test("returns a string type", () => {
  expect(typeof downCase("test")).toBe("string");
});

test("returns a lowercase string", () => {
  expect(downCase("TEST")).toBe("test");
});

test("throws an error when given a non-string", () => {
  expect(() => downCase(123)).toThrow();
  expect(() => downCase(true)).toThrow();
  expect(() => downCase(undefined)).toThrow();
  expect(() => downCase(null)).toThrow();
  expect(() => downCase({})).toThrow();
  expect(() => downCase([])).toThrow();
});
