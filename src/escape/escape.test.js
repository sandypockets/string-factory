const { escape } = require("../../dist");

test("returns a string type", () => {
  expect(typeof escape("<script>alert('hello')</script>")).toBe("string");
});

test("escapes html", () => {
  expect(escape("<script>alert('hello')</script>")).toBe(
    "&lt;script&gt;alert&#x28;&#x27;hello&#x27;&#x29;&lt;&#x2F;script&gt;"
  );
  expect(
    escape(
      '<style>@keyframes x{}</style><xss style="animation-name:x" onanimationend="alert(1)"></xss>'
    )
  ).toBe(
    "&lt;style&gt;&#x40;keyframes&#x20;x&#x7B;&#x7D;&lt;&#x2F;style&gt;&lt;xss&#x20;style&#x3D;&quot;animation-name&#x3A;x&quot;&#x20;onanimationend&#x3D;&quot;alert&#x28;1&#x29;&quot;&gt;&lt;&#x2F;xss&gt;"
  );
  expect(escape("$")).toBe("&#x24;");
  expect(escape("_")).toBe("&#x5F;");
  expect(escape("\\")).toBe("&#x5C;");
});

test("throws an error if input is not a string", () => {
  expect(() => escape(123)).toThrow();
  expect(() => escape(true)).toThrow();
  expect(() => escape(null)).toThrow();
  expect(() => escape(undefined)).toThrow();
  expect(() => escape({})).toThrow();
  expect(() => escape([])).toThrow();
});
