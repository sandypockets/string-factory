export function snakeToPascal(string) {
  if (typeof string === "string") {
    const words = string.split("_");
    return words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("");
  } else {
    throw new Error("snakeToPascal: expects a string");
  }
}
