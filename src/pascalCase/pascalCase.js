export function pascalCase(string) {
  if (typeof string === "string") {
    const words = string.toLowerCase().replace(/[.']/g, "").split(" ");
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  } else {
    throw new Error("pascalCase: expects a string");
  }
}
