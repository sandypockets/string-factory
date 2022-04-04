export function camelToKebab(string) {
  if (typeof string === "string") {
    return string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  } else {
    throw new Error("camelToKebab: expects a string");
  }
}
