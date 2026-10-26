"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/data/site";
import { enquiryText } from "@/lib/enquiry";
import { trackLead } from "@/lib/track";

const needs = ["Business website", "Website + online booking", "Mobile app (Android + iOS)", "Web app / backend", "Something else"];
const budgets = ["Not sure yet", "Under ₹10,000", "₹10,000 – ₹25,000", "₹25,000 – ₹1,00,000", "Above ₹1,00,000"];

type Status = "idle" | "sending" | "sent" | "error";

/** Without a form service the enquiry goes to WhatsApp, which every customer has (email apps often aren't set up). */
const usesWhatsApp = !site.formspreeId;

const inputClass =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [backupLink, setBackupLink] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return; // spam bot filled the hidden field

    const whatsapp = whatsappLink(enquiryText((field) => data.get(field), site.name));
    if (usesWhatsApp) {
      trackLead("form_whatsapp");
      window.location.href = whatsapp;
      return;
    }

    setBackupLink(whatsapp);
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
      trackLead("form");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-brand/40 bg-brand-soft p-8 text-center">
        <h2 className="text-xl font-semibold">Thank you! Your enquiry was sent.</h2>
        <p className="mt-2 text-muted">We&apos;ll get back to you soon, usually the same day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Your name *</span>
          <input name="name" required autoComplete="name" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Business name</span>
          <input name="business" autoComplete="organization" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Phone / WhatsApp *</span>
          <input name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input name="email" type="email" autoComplete="email" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">What do you need?</span>
          <select name="need" className={inputClass} defaultValue={needs[0]}>
            {needs.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Budget</span>
          <select name="budget" className={inputClass} defaultValue={budgets[0]}>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Tell us about your project</span>
        <textarea name="message" rows={5} className={inputClass} placeholder="What does your business do, and what should the website or app help with?" />
      </label>
      {/* Subject line of the enquiry email (Formspree); the visitor's "email" field becomes the reply-to address */}
      <input type="hidden" name="_subject" value={`New enquiry from the ${site.name} website`} />
      {/* Spam trap: real visitors never see or fill this */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-brand px-5 py-3.5 font-semibold text-on-brand transition hover:bg-brand-strong disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : usesWhatsApp ? "Send on WhatsApp" : "Send enquiry"}
      </button>
      {usesWhatsApp && (
        <p className="text-sm text-muted">WhatsApp opens with your details filled in. Just press send.</p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          Something went wrong.{" "}
          <a href={backupLink} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            Send it on WhatsApp instead
          </a>{" "}
          (your details are already filled in).
        </p>
      )}
    </form>
  );
}
