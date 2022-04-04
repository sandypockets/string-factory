const { kebabToCamel } = require("../../dist");

test("returns a string type", () => {
  expect(typeof kebabToCamel("kebab-to-camel")).toBe("string");
});

test("returns a camelCase string", () => {
  expect(kebabToCamel("camel")).toBe("camel");
  expect(kebabToCamel("kebab-to-camel")).toBe("kebabToCamel");
  expect(kebabToCamel("kebab-to-camel-test")).toBe("kebabToCamelTest");
});

test("throws an error if the input is not a string", () => {
  expect(() => kebabToCamel(123)).toThrow();
  expect(() => kebabToCamel(true)).toThrow();
  expect(() => kebabToCamel(null)).toThrow();
  expect(() => kebabToCamel(undefined)).toThrow();
  expect(() => kebabToCamel({})).toThrow();
  expect(() => kebabToCamel([])).toThrow();
});
