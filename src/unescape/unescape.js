export function unescape(string) {
  if (typeof string === "string") {
    return string
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&#x2F;/g, "/")
      .replace(/&#x60;/g, "`")
      .replace(/&#x3D;/g, "=")
      .replace(/&#x2B;/g, "+")
      .replace(/&#x3B;/g, ";")
      .replace(/&#x3A;/g, ":")
      .replace(/&#x2D;/g, "-")
      .replace(/&#x2C;/g, ",")
      .replace(/&#x2E;/g, ".")
      .replace(/&#x5B;/g, "[")
      .replace(/&#x5D;/g, "]")
      .replace(/&#x7B;/g, "{")
      .replace(/&#x7D;/g, "}")
      .replace(/&#x5C;/g, "\\")
      .replace(/&#x3F;/g, "?")
      .replace(/&#x21;/g, "!")
      .replace(/&#x23;/g, "#")
      .replace(/&#x25;/g, "%")
      .replace(/&#x40;/g, "@")
      .replace(/&#x5E;/g, "^")
      .replace(/&#x7E;/g, "~");
  } else {
    throw new Error("unescape: expects a string");
  }
}
