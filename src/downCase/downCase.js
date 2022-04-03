export function downCase(string) {
  if (typeof string === "string") {
    return string.toLowerCase();
  } else {
    throw new Error("downCase: expects a string");
  }
}
