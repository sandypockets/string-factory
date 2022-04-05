const { truncate } = require("../../dist");

test("returns a string type", () => {
  expect(typeof truncate("test", 1)).toBe("string");
});

test("returns a string with the correct length", () => {
  expect(truncate("this is a test", 7)).toBe("this is...");
});

test("accepts a custom delimiter", () => {
  expect(truncate("this is a test", 7, "????")).toBe("this is????");
});

test("works with only one argument", () => {
  expect(truncate("this is a test")).toBe("this is a test");
});

test("throws an error if the string is not a string", () => {
  expect(() => truncate(1, 1)).toThrow();
  expect(() => truncate(true, 1)).toThrow();
  expect(() => truncate(null, 1)).toThrow();
  expect(() => truncate(undefined, 1)).toThrow();
  expect(() => truncate({}, 1)).toThrow();
  expect(() => truncate([], 1)).toThrow();
});
