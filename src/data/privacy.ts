import { site } from "./site";

/**
 * Privacy policy content. Sections that depend on a service only appear when that service is configured
 * in brand.json (form, Google tag, Cloudflare), so the policy always matches what the site actually does.
 * Update `updated` whenever the content changes.
 */
export const privacyUpdated = "26 October 2026";

type Section = { title: string; paragraphs: string[]; points?: string[] };

const formSection: Section = site.formspreeId
  ? {
      title: "When you send an enquiry",
      paragraphs: [
        `Our contact form asks for your name, phone/WhatsApp number and details about your project; business name, email and budget are optional. The form is delivered to our email by Formspree, a form-handling service, which processes it on our behalf.`,
        `We use these details only to reply to you and to prepare your quote or sample design. We never sell them or add you to marketing lists without asking.`,
      ],
    }
  : {
      title: "When you send an enquiry",
      paragraphs: [
        `Our contact form prepares a WhatsApp message with the details you type. Nothing is stored on this website; the message is only sent when you press send in WhatsApp.`,
      ],
    };

const sections: (Section | false)[] = [
  {
    title: "Who we are",
    paragraphs: [
      `This website belongs to ${site.name}, a studio founded by ${site.owner}. For anything about your data, email us at ${site.email}.`,
    ],
  },
  formSection,
  {
    title: "When you contact us on WhatsApp or by email",
    paragraphs: [
      `Clicking a WhatsApp or email button opens WhatsApp or your email app. Messages you send are handled by those services under their own privacy policies, and we receive them like any other message.`,
    ],
  },
  !!site.googleTagId && {
    title: "Google Analytics and Google Ads (cookies)",
    paragraphs: [
      `We use Google Analytics and Google Ads to understand how visitors use this site and whether our ads work. They use cookies and similar technology to collect information such as the pages you view, the device and browser you use, your approximate location (city or region) and whether you contacted us after visiting.`,
      `We use this information only in combined form, to improve the website and our ads. Google processes it under its own privacy policy.`,
    ],
    points: [
      "Limit ad personalisation at adssettings.google.com",
      "Block or delete cookies in your browser settings",
      "Opt out of Google Analytics with Google's browser add-on (tools.google.com/dlpage/gaoptout)",
    ],
  },
  !!site.cloudflareAnalyticsToken && {
    title: "Cloudflare Web Analytics",
    paragraphs: [
      `We also count visits with Cloudflare Web Analytics. It does not use cookies and does not track individual visitors; it only shows totals such as page views.`,
    ],
  },
  {
    title: "Hosting",
    paragraphs: [
      `This website is hosted on GitHub Pages. Like any web host, GitHub may log technical details such as your IP address to keep the service secure and running. Our fonts are served from this website itself, not from a third party.`,
    ],
  },
  {
    title: "How long we keep your details",
    paragraphs: [
      `We keep enquiry details only as long as we need them to talk to you about your project and, if you become a client, to deliver and support it. Ask us any time and we will delete them.`,
    ],
  },
  {
    title: "Your choices and rights",
    paragraphs: [
      `You can ask us to show, correct or delete the personal details we hold about you, or to stop contacting you. Email ${site.email} and we will reply as soon as we can.`,
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [`If we change how we handle data, we will update this page and the date at the top.`],
  },
];

export const privacySections = sections.filter((s): s is Section => Boolean(s));
