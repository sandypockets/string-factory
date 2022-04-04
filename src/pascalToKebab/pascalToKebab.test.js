const { pascalToKebab } = require("../../dist");

test("returns a string type", () => {
  expect(typeof pascalToKebab("PascalCase")).toBe("string");
});

test("returns a kebab-cased string", () => {
  expect(pascalToKebab("PascalCase")).toBe("pascal-case");
  expect(pascalToKebab("PascalCaseWithNumbers123")).toBe(
    "pascal-case-with-numbers123"
  );
});

test("throw an error if the input is not a string", () => {
  expect(() => pascalToKebab(123)).toThrow();
  expect(() => pascalToKebab(true)).toThrow();
  expect(() => pascalToKebab({})).toThrow();
  expect(() => pascalToKebab([])).toThrow();
  expect(() => pascalToKebab(null)).toThrow();
  expect(() => pascalToKebab(undefined)).toThrow();
});
