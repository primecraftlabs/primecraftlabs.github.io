// Phone screens shown in the endlessly scrolling hero. Real pages of our live concept sites, captured with
// jk/tools/capture.py into jk/brand/source/shots/hero/ and converted to WebP by `python brand/sync.py`.
export type HeroShot = { src: string; label: string };

export const heroShots: HeroShot[] = [
  { src: "/hero/restaurant-home.webp", label: "Restaurant website: home" },
  { src: "/hero/clinic-home.webp", label: "Clinic booking app: home" },
  { src: "/hero/restaurant-menu.webp", label: "Restaurant website: menu with WhatsApp ordering" },
  { src: "/hero/clinic-dashboard.webp", label: "Clinic booking app: staff dashboard" },
  { src: "/hero/restaurant-photos.webp", label: "Restaurant website: photo credits" },
  { src: "/hero/clinic-doctors.webp", label: "Clinic booking app: doctors admin" },
];

/** Small floating status chips over the hero (illustrative UI, like the sites' own messages). */
export const heroChips = [
  { text: "Booking confirmed · 10:30 AM", tone: "whatsapp" as const },
  { text: "New order on WhatsApp", tone: "accent" as const },
];
