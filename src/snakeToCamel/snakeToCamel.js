export function snakeToCamel(string) {
  if (typeof string === "string") {
    return string
      .split("_")
      .map((word, index) => {
        if (index === 0) {
          return word;
        }
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  } else {
    throw new Error("snakeToCamel: expects a string");
  }
}
