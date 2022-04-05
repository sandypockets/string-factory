const { escapeBase } = require("../../dist");

test("returns a string type", () => {
  expect(typeof escapeBase("<script>alert('hello')</script>")).toBe("string");
});

test("escapeBases html", () => {
  expect(escapeBase("<script>alert('hello')</script>")).toBe(
    "&lt;script&gt;alert(&#x27;hello&#x27;)&lt;/script&gt;"
  );
  expect(
    escapeBase(
      '<style>@keyframes x{}</style><xss style="animation-name:x" onanimationend="alert(1)"></xss>'
    )
  ).toBe(
    "&lt;style&gt;@keyframes x{}&lt;/style&gt;&lt;xss style=&quot;animation-name:x&quot; onanimationend=&quot;alert(1)&quot;&gt;&lt;/xss&gt;"
  );
  expect(escapeBase("$")).toBe("$");
  expect(escapeBase("_")).toBe("_");
  expect(escapeBase("\\")).toBe("\\");
});

test("throws an error if input is not a string", () => {
  expect(() => escapeBase(123)).toThrow();
  expect(() => escapeBase(true)).toThrow();
  expect(() => escapeBase(null)).toThrow();
  expect(() => escapeBase(undefined)).toThrow();
  expect(() => escapeBase({})).toThrow();
  expect(() => escapeBase([])).toThrow();
});
