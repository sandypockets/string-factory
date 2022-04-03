const { snakeToKebab } = require("../../dist");

test("it returns a string type", () => {
  expect(typeof snakeToKebab("hello_world")).toBe("string");
});

test("it converts a snake_case string to kebab-case", () => {
  expect(snakeToKebab("hello_world")).toBe("hello-world");
});

test("it returns a lowercase string", () => {
  expect(snakeToKebab("HELLO_WORLD")).toBe("hello-world");
});

test("it returns a string with no spaces", () => {
  expect(snakeToKebab("hello_world")).not.toContain(" ");
});

test("throws an error if the input is not a string", () => {
  expect(() => snakeToKebab(123)).toThrow();
  expect(() => snakeToKebab(true)).toThrow();
  expect(() => snakeToKebab(null)).toThrow();
  expect(() => snakeToKebab(undefined)).toThrow();
  expect(() => snakeToKebab({})).toThrow();
  expect(() => snakeToKebab([])).toThrow();
});
