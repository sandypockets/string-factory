const { titleCase } = require("../../dist");

test("returns a string type", () => {
  expect(typeof titleCase("test")).toBe("string");
});

test("converts a sentence into titleCase", () => {
  expect(titleCase("test sentence")).toBe("Test Sentence");
  expect(titleCase("Look ma I'm title cAse")).toBe("Look Ma I'm Title Case");
});

test("throws an error if the input is not a string", () => {
  expect(() => titleCase(123)).toThrow();
  expect(() => titleCase(true)).toThrow();
  expect(() => titleCase(undefined)).toThrow();
  expect(() => titleCase(null)).toThrow();
  expect(() => titleCase({})).toThrow();
  expect(() => titleCase([])).toThrow();
});
