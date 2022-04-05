export function escape(dirtyString) {
  if (typeof dirtyString === "string" && dirtyString.length > 0) {
    const escapePairs = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
      "=": "&#x3D;",
      _: "&#x5F;",
      " ": "&#x20;",
      "!": "&#x21;",
      "@": "&#x40;",
      "#": "&#x23;",
      $: "&#x24;",
      "%": "&#x25;",
      "^": "&#x5E;",
      "*": "&#x2A;",
      "(": "&#x28;",
      ")": "&#x29;",
      "+": "&#x2B;",
      "{": "&#x7B;",
      "}": "&#x7D;",
      "|": "&#x7C;",
      "\\": "&#x5C;",
      ":": "&#x3A;",
      "[": "&#x5B;",
      "]": "&#x5D;",
      "/": "&#x2F;",
    };

    return dirtyString.replace(
      /[&<>"'`=-_ !@#$%^*()+{}|;:[\]/]/g,
      function (string) {
        return escapePairs[string];
      }
    );
  } else {
    throw new Error("escape: expects a string");
  }
}
