const { snakeToPascal } = require("../../dist");

test("returns a string type", () => {
  expect(typeof snakeToPascal("hello_world")).toBe("string");
});

test("converts a snake_case string to PascalCase", () => {
  expect(snakeToPascal("hello_world")).toBe("HelloWorld");
});

test("throws an error if the input is not a string", () => {
  expect(() => snakeToPascal(123)).toThrow();
  expect(() => snakeToPascal(true)).toThrow();
  expect(() => snakeToPascal(undefined)).toThrow();
  expect(() => snakeToPascal(null)).toThrow();
  expect(() => snakeToPascal({})).toThrow();
  expect(() => snakeToPascal([])).toThrow();
});
