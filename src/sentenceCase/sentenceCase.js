export function sentenceCase(string) {
  if (typeof string === "string") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    throw new Error("sentenceCase: expects a string");
  }
}
