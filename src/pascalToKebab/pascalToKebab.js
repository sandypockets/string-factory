export function pascalToKebab(string) {
  if (typeof string === "string") {
    return string
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
      .substring(1);
  } else {
    throw new Error("pascalToKebab: expects a string");
  }
}
