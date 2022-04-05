const { vaporize } = require("../../dist");

test("returns a string type", () => {
  expect(typeof vaporize("hello")).toBe("string");
});

test("returns a string in vaporwave form", () => {
  expect(vaporize("hello world")).toBe("h e l l o   w o r l d");
  expect(vaporize("this is a test")).toBe("t h i s   i s   a   t e s t");
});

test("throws an error if the input is not a string", () => {
  expect(() => vaporize(123)).toThrow();
  expect(() => vaporize(true)).toThrow();
  expect(() => vaporize(null)).toThrow();
  expect(() => vaporize(undefined)).toThrow();
  expect(() => vaporize({})).toThrow();
  expect(() => vaporize([])).toThrow();
});
