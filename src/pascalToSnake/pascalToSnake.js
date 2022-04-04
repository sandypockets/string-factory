export function pascalToSnake(string) {
  if (typeof string === "string") {
    return string
      .replace(/([A-Z])/g, function (g) {
        return "_" + g.toLowerCase();
      })
      .substring(1);
  } else {
    throw new Error("pascalToSnake: expects a string");
  }
}
