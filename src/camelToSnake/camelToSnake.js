export function camelToSnake(string) {
  if (typeof string === "string" && string.length > 0) {
    return string.replace(/([A-Z])/g, function (g) {
      return "_" + g.toLowerCase();
    });
  } else {
    throw new Error("camelToSnake: expects a string");
  }
}
