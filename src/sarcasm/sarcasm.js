export function sarcasm(string) {
  if (typeof string === "string") {
    const chars = string.toLowerCase().split("");
    return chars
      .map((char, index) => {
        if (index % 2 === 0) {
          return char.toUpperCase();
        }
        return char.toLowerCase();
      })
      .join("");
  } else {
    throw new Error("sarcasm: expects a string");
  }
}
