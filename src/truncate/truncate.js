export function truncate(string, length, delimiter) {
  if (typeof string === "string") {
    if (length == null) {
      length = 30;
    }
    if (delimiter == null) {
      delimiter = "...";
    }
    if (string.length <= length) {
      return string;
    }
    return string.slice(0, length) + delimiter;
  } else {
    throw new Error("truncate: expects a string");
  }
}
