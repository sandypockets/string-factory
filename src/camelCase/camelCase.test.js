const { camelCase } = require("../../dist");

test("returns a string type", () => {
  expect(typeof camelCase("hello world")).toBe("string");
});

test("returns a camel cased string", () => {
  expect(camelCase("some string")).toBe("someString");
});

test("throws an error if the input is not a string", () => {
  expect(() => camelCase(123)).toThrow();
  expect(() => camelCase(true)).toThrow();
  expect(() => camelCase([])).toThrow();
  expect(() => camelCase({})).toThrow();
  expect(() => camelCase(null)).toThrow();
  expect(() => camelCase(undefined)).toThrow();
});
