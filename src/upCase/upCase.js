export function upCase(string) {
  if (string && typeof string === "string") {
    return string.toUpperCase();
  } else {
    throw new Error("upCase: expects a string");
  }
}
