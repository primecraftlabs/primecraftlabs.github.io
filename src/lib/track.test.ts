// Run: npm test
import assert from "node:assert/strict";
import { test } from "node:test";
import { leadMethodForHref } from "./track.ts";

test("WhatsApp links count as WhatsApp leads", () => {
  assert.equal(leadMethodForHref("https://wa.me/910000000000?text=Hi"), "whatsapp");
  assert.equal(leadMethodForHref("https://api.whatsapp.com/send?phone=910000000000"), "whatsapp");
});

test("mailto links count as email leads", () => {
  assert.equal(leadMethodForHref("mailto:hello@example.com?subject=Website%20enquiry"), "email");
});

test("ordinary links are not leads", () => {
  assert.equal(leadMethodForHref("/services/"), null);
  assert.equal(leadMethodForHref("https://github.com/example"), null);
  assert.equal(leadMethodForHref("#websites"), null);
});
