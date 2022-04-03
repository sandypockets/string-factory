const { sentenceCase } = require("../../dist");

test("returns a string type", () => {
  expect(typeof sentenceCase("hello world")).toBe("string");
});

test("returns a string with the first letter of the string capitalized", () => {
  expect(sentenceCase("hello world")).toBe("Hello world");
});

test("throws an error when given a non-string", () => {
  expect(() => sentenceCase(123)).toThrow();
  expect(() => sentenceCase(true)).toThrow();
  expect(() => sentenceCase([])).toThrow();
  expect(() => sentenceCase({})).toThrow();
});
