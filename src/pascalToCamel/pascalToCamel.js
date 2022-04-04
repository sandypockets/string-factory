export function pascalToCamel(string) {
  if (typeof string === "string") {
    return string.charAt(0).toLowerCase() + string.substring(1);
  } else {
    throw new Error("pascalToCamel: expects a string");
  }
}
