const { pascalToSnake } = require("../../dist");

test("returns a string type", () => {
  expect(typeof pascalToSnake("PascalCase")).toBe("string");
});

test("converts a PascalCase string to snake_case", () => {
  expect(pascalToSnake("PascalCase")).toBe("pascal_case");
  expect(pascalToSnake("PascalCaseString")).toBe("pascal_case_string");
});

test("throws an error if the input is not a string", () => {
  expect(() => pascalToSnake(123)).toThrow();
  expect(() => pascalToSnake(true)).toThrow();
  expect(() => pascalToSnake([])).toThrow();
  expect(() => pascalToSnake({})).toThrow();
  expect(() => pascalToSnake(null)).toThrow();
  expect(() => pascalToSnake(undefined)).toThrow();
});
