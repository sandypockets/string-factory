const { camelToPascal } = require("../../dist");

test("returns a string type", () => {
  expect(typeof camelToPascal("test")).toBe("string");
});

test("capitalizes the first letter of every word", () => {
  expect(camelToPascal("camel")).toBe("Camel");
  expect(camelToPascal("camelToPascal")).toBe("CamelToPascal");
});

test("throw an error if the input is not a string", () => {
  expect(() => camelToPascal(123)).toThrow();
  expect(() => camelToPascal(true)).toThrow();
  expect(() => camelToPascal([])).toThrow();
  expect(() => camelToPascal({})).toThrow();
  expect(() => camelToPascal(undefined)).toThrow();
  expect(() => camelToPascal(null)).toThrow();
});
