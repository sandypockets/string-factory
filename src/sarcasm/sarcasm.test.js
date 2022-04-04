const { sarcasm } = require("../../dist");

test("returns a string type", () => {
  expect(typeof sarcasm("this is a test")).toBe("string");
});

test("capitalizes every second character", () => {
  expect(sarcasm("sarcasm")).toBe("SaRcAsM");
  expect(sarcasm("wow that is really interesting")).toBe(
    "WoW ThAt iS ReAlLy iNtErEsTiNg"
  );
  expect(sarcasm("wOW tHaT IS REALLY INTeResting")).toBe(
    "WoW ThAt iS ReAlLy iNtErEsTiNg"
  );
});

test("throws an error if the input is not a string", () => {
  expect(() => sarcasm(1)).toThrow();
  expect(() => sarcasm(true)).toThrow();
  expect(() => sarcasm(null)).toThrow();
  expect(() => sarcasm(undefined)).toThrow();
  expect(() => sarcasm({})).toThrow();
  expect(() => sarcasm([])).toThrow();
});
