export function kebabCase(string) {
  if (typeof string === "string") {
    return string.toLowerCase().split(" ").join("-");
  } else {
    throw new Error("kebabCase: expects a string");
  }
}
