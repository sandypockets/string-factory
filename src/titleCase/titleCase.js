export function titleCase(string) {
  if (typeof string === "string") {
    const words = string.toLowerCase().split(" ");
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  } else {
    throw new Error("titleCase: expects a string");
  }
}
