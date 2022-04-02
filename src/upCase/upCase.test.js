const { upCase } = require("../../dist");

test("should return a string type", () => {
  expect(typeof upCase("hello")).toBe("string");
});

test("should return all characters in uppercase", () => {
  expect(upCase("hello")).toBe("HELLO");
});

test("throws an error if given a non-string", () => {
  expect(() => upCase(123)).toThrow();
  expect(() => upCase(true)).toThrow();
  expect(() => upCase(undefined)).toThrow();
  expect(() => upCase(null)).toThrow();
  expect(() => upCase({})).toThrow();
  expect(() => upCase([])).toThrow();
});
