const { snakeCase } = require("../../dist");

test("returns a string type", () => {
  expect(typeof snakeCase("test")).toBe("string");
});

test("returns a string with snake case", () => {
  expect(snakeCase("one")).toBe("one");
  expect(snakeCase("snake case")).toBe("snake_case");
});

test("throws an error if the argument is not a string", () => {
  expect(() => snakeCase(1)).toThrow();
  expect(() => snakeCase(true)).toThrow();
  expect(() => snakeCase([])).toThrow();
  expect(() => snakeCase({})).toThrow();
});
