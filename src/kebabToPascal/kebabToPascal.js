export function kebabToPascal(string) {
  if (typeof string === "string") {
    const words = string.toLowerCase().split("-");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join("");
  } else {
    throw new Error("kebabToPascal: expects a string");
  }
}
