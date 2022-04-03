export function camelCase(string) {
  if (typeof string === "string") {
    const words = string.split(" ");
    return words
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join("");
  } else {
    throw new Error("camelCase: expects a string");
  }
}
