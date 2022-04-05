export function escapeBase(dirtyString) {
  if (typeof dirtyString === "string" && dirtyString.length > 0) {
    const escapePairs = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
    };

    return dirtyString.replace(/[&<>"']/g, function (string) {
      return escapePairs[string];
    });
  } else {
    throw new Error("escapeBase: expects a string");
  }
}
