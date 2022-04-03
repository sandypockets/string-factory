const { sentenceCase } = require("../../dist");

test("returns a string type", () => {
  expect(typeof sentenceCase("hello world")).toBe("string");
});

test("returns a string with the first letter of the string capitalized", () => {
  expect(sentenceCase("hello world")).toBe("Hello world");
});
