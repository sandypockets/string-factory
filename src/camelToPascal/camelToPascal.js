export function camelToPascal(string) {
  if (typeof string === "string") {
    return string
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/\s+/g, "")
      .replace(/^./, function (str) {
        return str.toUpperCase();
      });
  } else {
    throw new Error("camelToPascal: expects a string");
  }
}
