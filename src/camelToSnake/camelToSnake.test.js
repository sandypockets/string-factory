const { camelToSnake } = require("../../dist");

test("returns a string type", () => {
  expect(typeof camelToSnake("test")).toBe("string");
});

test("returns a string in snake case", () => {
  expect(camelToSnake("test")).toBe("test");
  expect(camelToSnake("someString")).toBe("some_string");
  expect(camelToSnake("lookMaNoCaps")).toBe("look_ma_no_caps");
});

test("appends numbers to the end of the string", () => {
  expect(camelToSnake("test1")).toBe("test1");
  expect(camelToSnake("test123")).toBe("test123");
  expect(camelToSnake("someTest123")).toBe("some_test123");
});

test("throws an error when given a non-string", () => {
  expect(() => camelToSnake(123)).toThrow();
  expect(() => camelToSnake(true)).toThrow();
  expect(() => camelToSnake(null)).toThrow();
  expect(() => camelToSnake(undefined)).toThrow();
  expect(() => camelToSnake({})).toThrow();
  expect(() => camelToSnake([])).toThrow();
});

test("throws an error when given an empty string", () => {
  expect(() => camelToSnake("")).toThrow();
});
