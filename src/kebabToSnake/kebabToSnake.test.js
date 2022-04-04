const { kebabToSnake } = require("../../dist");

test("returns a string type", () => {
  expect(typeof kebabToSnake("")).toBe("string");
});

test("returns a string in snake_case", () => {
  expect(kebabToSnake("hello-world")).toBe("hello_world");
  expect(kebabToSnake("Hello-world")).toBe("hello_world");
  expect(kebabToSnake("Hello-wOrld")).toBe("hello_world");
});

test("throws an error if the input is not a string", () => {
  expect(() => kebabToSnake(123)).toThrow();
  expect(() => kebabToSnake(true)).toThrow();
  expect(() => kebabToSnake({})).toThrow();
  expect(() => kebabToSnake([])).toThrow();
  expect(() => kebabToSnake(null)).toThrow();
  expect(() => kebabToSnake(undefined)).toThrow();
});
