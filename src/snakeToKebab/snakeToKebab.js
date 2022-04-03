export function snakeToKebab(string) {
  if (typeof string === "string") {
    return string.toLowerCase().split("_").join("-");
  } else {
    throw new Error("snakeToKebab: expects a string");
  }
}
