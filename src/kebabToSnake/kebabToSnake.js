export function kebabToSnake(string) {
  if (typeof string === "string") {
    return string.toLowerCase().split("-").join("_");
  } else {
    throw new Error("kebabToSnake: expects a string");
  }
}
