// Run: npm test   (Node's built-in test runner with type stripping)
import assert from "node:assert/strict";
import { test } from "node:test";
import { enquiryText } from "./enquiry.ts";

const fields = (values: Record<string, string>) => (key: string) => values[key] ?? null;

test("includes every filled field with its label, in form order", () => {
  const text = enquiryText(
    fields({ name: "Ravi", business: "Ravi Sweets", phone: "98xxxxxx01", need: "Business website", budget: "Not sure yet", message: "Need a menu page" }),
    "Studio",
  );
  assert.equal(
    text,
    [
      "New enquiry from the Studio website",
      "Name: Ravi",
      "Business: Ravi Sweets",
      "Phone/WhatsApp: 98xxxxxx01",
      "Needs: Business website",
      "Budget: Not sure yet",
      "About the project: Need a menu page",
    ].join("\n"),
  );
});

test("leaves out empty and whitespace-only fields", () => {
  const text = enquiryText(fields({ name: "Asha", email: "   ", message: "" }), "Studio");
  assert.equal(text, "New enquiry from the Studio website\nName: Asha");
});

test("never includes unknown fields such as the spam trap", () => {
  const text = enquiryText(fields({ name: "Asha", _gotcha: "bot" }), "Studio");
  assert.ok(!text.includes("bot"));
});
