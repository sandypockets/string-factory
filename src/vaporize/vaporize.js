export function vaporize(string) {
  if (typeof string === "string") {
    return string.split("").join(" ");
  } else {
    throw new Error("vaporize: expects a string");
  }
}
