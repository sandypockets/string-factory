export function kebabToCamel(string) {
  if (typeof string === "string") {
    return string
      .split("-")
      .map((word, index) => {
        if (index === 0) {
          return word;
        }
        return word[0].toUpperCase() + word.slice(1);
      })
      .join("");
  } else {
    throw new Error("kebabToCamel: expects a string");
  }
}
