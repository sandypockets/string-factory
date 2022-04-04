const { pascalCase } = require("../../dist");

test("returns a string type", () => {
  expect(typeof pascalCase("test")).toBe("string");
});

test("converts a sentence into PascalCase", () => {
  expect(pascalCase("test sentence")).toBe("TestSentence");
  expect(pascalCase("Look ma I'm pascal cAse")).toBe("LookMaImPascalCase");
});

test("throws an error if the input is not a string", () => {
  expect(() => pascalCase(123)).toThrow();
  expect(() => pascalCase(true)).toThrow();
  expect(() => pascalCase(undefined)).toThrow();
  expect(() => pascalCase(null)).toThrow();
  expect(() => pascalCase({})).toThrow();
  expect(() => pascalCase([])).toThrow();
});
