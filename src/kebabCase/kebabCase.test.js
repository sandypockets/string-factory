const { kebabCase } = require("../../dist");

test("returns a string type", () => {
  expect(typeof kebabCase("hello world")).toBe("string");
});

test("returns a kebab-cased string", () => {
  expect(kebabCase("hello world")).toBe("hello-world");
  expect(kebabCase("wow a kebab case string")).toBe("wow-a-kebab-case-string");
});

test("throws an error if the input is not a string", () => {
  expect(() => kebabCase(123)).toThrow();
  expect(() => kebabCase(true)).toThrow();
  expect(() => kebabCase([])).toThrow();
  expect(() => kebabCase({})).toThrow();
  expect(() => kebabCase(null)).toThrow();
  expect(() => kebabCase(undefined)).toThrow();
});
