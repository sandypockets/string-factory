const { camelToKebab } = require("../../dist");

test("returns a string type", () => {
  expect(typeof camelToKebab("camelToKebab")).toBe("string");
});

test("returns a kebab-cased string", () => {
  expect(camelToKebab("camelToKebab")).toBe("camel-to-kebab");
});

test("throws an error if the input is not a string", () => {
  expect(() => camelToKebab(123)).toThrow();
  expect(() => camelToKebab(true)).toThrow();
  expect(() => camelToKebab(undefined)).toThrow();
  expect(() => camelToKebab(null)).toThrow();
  expect(() => camelToKebab({})).toThrow();
  expect(() => camelToKebab([])).toThrow();
});
