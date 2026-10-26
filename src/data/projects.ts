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
    category: "Concept project · Restaurant",
    status: "live",
    image: "/work/restaurant-website.png",
    liveUrl: site.urls.demoRestaurant,
    summary: "Masala Lane Kitchen: a complete restaurant website with dish photos, full menu and WhatsApp ordering.",
    problem:
      "Most local restaurants rely on delivery apps and phone calls. Customers can't see the full menu, prices or photos, and the restaurant pays commission on every order.",
    solution:
      "A fast, mobile-first website with the full menu, dish photos, hours and directions. Customers build their order on the site and send it to the restaurant on WhatsApp in one tap, with no commission. Masala Lane Kitchen is a concept restaurant we designed to show the finished result.",
    features: [
      "Full menu with dish photos, prices and veg/non-veg marks",
      "Order cart: customers review dishes and total, then send it on WhatsApp",
      "Opening hours, location and directions",
      "Mobile-first: works from small phones up to desktop",
    ],
    tech: ["Next.js", "Tailwind CSS", "WhatsApp"],
    codeUrl: site.urls.demoRestaurantCode,
  },
  {
    slug: "clinic-booking",
    title: "Clinic booking web app",
    category: "Concept project · Clinic",
    status: "live",
    image: "/work/clinic-booking.png",
    liveUrl: site.urls.demoClinic,
    summary: "Kinara Family Clinic: a clinic website where patients book a free slot themselves, with a live dashboard for the clinic and its doctors.",
    problem:
      "Clinics lose patients when the phone is busy. The front desk manages appointments by hand, double bookings happen, and doctors can't easily see their own day.",
    solution:
      "A mobile-first clinic website where patients see doctors and live free slots and book in a few taps. Double booking is blocked by the database itself. Each booking gets a code, a calendar invite and a WhatsApp message, and the clinic gets an email alert. Staff log in to a live dashboard: the admin adds doctors, sets their schedules and invites their logins, and each doctor sees only their own patients and manages their profile and leave days. Kinara Family Clinic is a concept clinic we designed to show the finished result.",
    features: [
      "Live free slots: two patients can never book the same time",
      "Booking code, Add to Google Calendar / .ics and WhatsApp message for the patient",
      "Email alert to the clinic for every booking",
      "Admin dashboard: add doctors, set schedules, publish or hide them, invite their logins",
      "Doctor login: own patients only, profile, avatar and leave days that can't be booked",
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
