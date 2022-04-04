const { pascalToCamel } = require("../../dist");

test("returns a string type", () => {
  expect(typeof pascalToCamel("")).toBe("string");
});

test("returns a string with the first letter lowercase", () => {
  expect(pascalToCamel("Pascal")).toBe("pascal");
});

test("converts a PascalCase string to camelCase", () => {
  expect(pascalToCamel("PascalCase")).toBe("pascalCase");
  expect(pascalToCamel("PascalCaseString")).toBe("pascalCaseString");
});

test("throws an error if the input is not a string", () => {
  expect(() => pascalToCamel(1)).toThrow();
});
