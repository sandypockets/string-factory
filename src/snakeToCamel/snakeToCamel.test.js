const { snakeToCamel } = require("../../dist");

test("it returns a string type", () => {
  expect(typeof snakeToCamel("hello_world")).toBe("string");
});

test("it does not contain any hyphens", () => {
  expect(snakeToCamel("hello_world")).not.toContain("-");
});

test("the first letter is lowercase", () => {
  expect(snakeToCamel("some_really_long_variable_name")).toMatch(/^[a-z]/);
  expect(snakeToCamel("variable_name")).toMatch(/^[a-z]/);
  expect(snakeToCamel("name")).toMatch(/^[a-z]/);
});

test("it converts snake_case to camelCase", () => {
  expect(snakeToCamel("some_really_long_variable_name")).toBe(
    "someReallyLongVariableName"
  );
  expect(snakeToCamel("short")).toBe("short");
  expect(snakeToCamel("great_name")).toBe("greatName");
  expect(snakeToCamel("alreadyCamelCase")).toBe("alreadyCamelCase");
});

test("throws an error if the input is not a string", () => {
  expect(() => snakeToCamel(123)).toThrow();
  expect(() => snakeToCamel(true)).toThrow();
  expect(() => snakeToCamel(null)).toThrow();
  expect(() => snakeToCamel(undefined)).toThrow();
  expect(() => snakeToCamel({})).toThrow();
  expect(() => snakeToCamel([])).toThrow();
});
