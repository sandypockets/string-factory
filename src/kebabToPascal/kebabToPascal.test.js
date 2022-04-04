const { kebabToPascal } = require("../../dist");

test("returns a string type", () => {
  expect(typeof kebabToPascal("")).toBe("string");
});

test("returns a string in PascalCase", () => {
  expect(kebabToPascal("kebab-case")).toBe("KebabCase");
  expect(kebabToPascal("Kebab-case")).toBe("KebabCase");
  expect(kebabToPascal("Kebab-Case")).toBe("KebabCase");
  expect(kebabToPascal("Kebab-CaSe")).toBe("KebabCase");
});

test("throws an error if the input is not a string", () => {
  expect(() => kebabToPascal(123)).toThrow();
  expect(() => kebabToPascal(true)).toThrow();
  expect(() => kebabToPascal(null)).toThrow();
  expect(() => kebabToPascal(undefined)).toThrow();
  expect(() => kebabToPascal({})).toThrow();
  expect(() => kebabToPascal([])).toThrow();
});
