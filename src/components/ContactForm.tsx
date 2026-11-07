"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Icon } from "@/components/Icons";
import { budgets, needs } from "@/data/contact";
import { site, whatsappLink } from "@/data/site";
import { enquiryText } from "@/lib/enquiry";
import { trackLead } from "@/lib/track";


type Status = "idle" | "sending" | "sent" | "error";

/** Without a form service the enquiry goes to WhatsApp, which every customer has (email apps often aren't set up). */
const usesWhatsApp = !site.formspreeId;

const inputClass =
  "soft-inset w-full rounded-2xl px-4 py-3 text-fg placeholder:text-muted focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const labelClass = "mb-2 block text-sm font-semibold";

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
      <div role="status" className="soft rounded-[1.75rem] p-8 text-center sm:p-10">
        <span className="soft-inset mx-auto mb-5 grid size-14 place-items-center rounded-full text-accent-text">
          <Icon name="check" className="size-6" />
        </span>
        <h2 className="text-xl font-extrabold tracking-tight">Thank you! Your enquiry was sent.</h2>
        <p className="mt-2 text-muted">We&apos;ll get back to you soon, usually the same day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="soft space-y-6 rounded-[1.75rem] p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Your name *</span>
          <input name="name" required autoComplete="name" className={inputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Business name</span>
          <input name="business" autoComplete="organization" className={inputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Phone / WhatsApp *</span>
          <input name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Email</span>
          <input name="email" type="email" autoComplete="email" className={inputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>What do you need?</span>
          <select name="need" className={inputClass} defaultValue={needs[0]}>
            {needs.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Budget</span>
          <select name="budget" className={inputClass} defaultValue={budgets[0]}>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className={labelClass}>Tell us about your project</span>
        <textarea name="message" rows={5} className={inputClass} placeholder="What does your business do, and what should the website or app help with?" />
      </label>
      {/* Subject line of the enquiry email (Formspree); the visitor's "email" field becomes the reply-to address */}
      <input type="hidden" name="_subject" value={`New enquiry from the ${site.name} website`} />
      {/* Spam trap: real visitors never see or fill this */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "sending"}
        className={`solid-lift inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:opacity-60 sm:w-auto ${
          usesWhatsApp ? "bg-whatsapp hover:bg-whatsapp-strong" : "bg-brand hover:bg-brand-strong"
        }`}
      >
        {usesWhatsApp && <Icon name="whatsapp" />}
        {status === "sending" ? "Sending..." : usesWhatsApp ? "Send on WhatsApp" : "Send enquiry"}
      </button>
      {usesWhatsApp && (
        <p className="text-sm text-muted">WhatsApp opens with your details filled in. Just press send.</p>
      )}
      <p className="text-sm text-muted">
        We use your details only to reply to you. See our{" "}
        <Link href="/privacy/" className="font-semibold text-fg underline underline-offset-4">
          Privacy Policy
        </Link>
        .
      </p>
      {status === "error" && (
        <p role="alert" className="soft-inset rounded-2xl px-4 py-3 text-sm text-danger">
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
