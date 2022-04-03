export function snakeCase(string) {
  if (typeof string === "string") {
    return string.split(" ").join("_").toLowerCase();
  } else {
    throw new Error("snakeCase: expects a string");
  }
}
