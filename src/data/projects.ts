import { site } from "./site";

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: "live" | "in-progress";
  /** Cover: a screenshot in public/ (made with jk/tools/capture.py) or, if none, a ServiceVisual id. */
  image?: string;
  visual?: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "restaurant-website",
    title: "Restaurant website",
    category: "Demo · Local business",
    status: "in-progress",
    image: "/work/restaurant-website.png",
    summary: "Menu, photos, location and one-tap WhatsApp ordering for a local restaurant or café.",
    problem:
      "Most local restaurants rely on delivery apps and phone calls. Customers can't see the full menu, prices or photos, and the restaurant pays commission on every order.",
    solution:
      "A fast, mobile-first website with the full menu, photos and reviews, and a WhatsApp order button that sends the order straight to the owner, with no commission.",
    features: [
      "Full menu with categories, prices and photos",
      "Order on WhatsApp with the items pre-filled",
      "Opening hours, location and directions",
      "Google-friendly setup so people find it in search",
    ],
    tech: ["Next.js", "Tailwind CSS", "WhatsApp"],
    codeUrl: site.urls.demoRestaurantCode,
  },
  {
    slug: "clinic-booking",
    title: "Clinic with online booking",
    category: "Demo · Local business",
    status: "in-progress",
    image: "/work/clinic-booking.png",
    summary: "Doctor profiles, services and an appointment system where patients choose their own time slot.",
    problem:
      "Clinics lose patients when the phone is busy, and the front desk spends hours managing appointments by hand.",
    solution:
      "A clinic website where patients see doctors and services and book an available slot themselves, while the clinic sees every booking in one simple dashboard.",
    features: [
      "Doctor profiles and services",
      "Patients pick an available date and time",
      "Booking dashboard for the clinic",
      "Confirmation by WhatsApp or email",
    ],
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    codeUrl: site.urls.demoClinicCode,
  },
  {
    slug: "ai-lead-finder",
    title: "AI lead finder",
    category: "AI tool",
    status: "live",
    visual: "automation",
    summary: "An AI agent that finds local businesses, checks their websites for problems and drafts personal messages for review.",
    problem:
      "Finding the right businesses to contact takes hours: searching maps, checking each website, and writing a personal message for every one.",
    solution:
      "An AI agent that searches Google Maps, checks each business website for problems (missing, slow, not mobile-friendly, no booking), scores the best opportunities, and drafts a personal message. A person reviews and sends every message, so nothing is spammy.",
    features: [
      "Business search with Google Places",
      "Automatic website health check and scoring",
      "AI-written messages (Gemini), always human-approved",
      "Dashboard to track leads, replies and wins",
    ],
    tech: ["Python", "Gemini AI", "Google Places API", "Streamlit", "SQLite"],
    codeUrl: site.urls.clientFinderCode,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
