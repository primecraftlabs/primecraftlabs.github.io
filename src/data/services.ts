import type { IconName } from "@/components/Icons";
import { amount } from "./site";

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  short: string;
  forWho: string;
  includes: string[];
  tech: string[];
  price: string;
};

export const services: Service[] = [
  {
    id: "websites",
    icon: "globe",
    title: "Business websites",
    short: "A clean, fast website with your services, photos, reviews and location, so customers trust you before they call.",
    forWho: "Clinics, salons, gyms, restaurants, coaching centres and shops that need to look professional online.",
    includes: [
      "Up to 5 pages, designed for phones first",
      "WhatsApp button, click-to-call and Google Maps",
      "Fast loading and Google-friendly setup",
      "Help with your domain and hosting",
    ],
    tech: ["Next.js", "HTML/CSS", "SEO basics"],
    price: `from ${amount("website")}`,
  },
  {
    id: "booking",
    icon: "calendar",
    title: "Online booking & ordering",
    short: "Customers pick a time slot or place an order themselves, and you see everything in one place.",
    forWho: "Businesses that take appointments or orders by phone today and miss calls.",
    includes: [
      "Booking or ordering flow that works on any phone",
      "A simple page to see and manage bookings",
      "WhatsApp or email confirmations",
      "One month of free fixes after launch",
    ],
    tech: ["Next.js", "Firebase", "WhatsApp"],
    price: `from ${amount("booking")}`,
  },
  {
    id: "mobile-apps",
    icon: "phone",
    title: "Mobile apps (Android + iOS)",
    short: "One codebase for both platforms with Kotlin Multiplatform: two native apps for less time and money.",
    forWho: "Startups and businesses that need a real app in the Play Store and App Store.",
    includes: [
      "Shared business logic and UI for Android and iOS",
      "Login, push notifications and payments",
      "Clean architecture that is easy to grow",
      "Play Store and App Store release setup",
    ],
    tech: ["Kotlin Multiplatform", "Compose", "Firebase"],
    price: "Custom quote",
  },
  {
    id: "backends",
    icon: "cloud",
    title: "Web apps & backends",
    short: "Custom web apps and scalable backends on Google Cloud, with login, payments and notifications built in.",
    forWho: "Startups and teams that need an admin panel, an API, or a backend for their app.",
    includes: [
      "REST/gRPC APIs and admin dashboards",
      "Secure login with roles and phone OTP",
      "Payments, wallets and subscriptions",
      "Automated deployments (CI/CD) on Google Cloud",
    ],
    tech: ["Go", "Node.js", "Next.js", "Cloud Run", "Firebase"],
    price: "Custom quote",
  },
  {
    id: "realtime",
    icon: "bolt",
    title: "Real-time features",
    short: "Live updates, chat, online status and live audio/video that make your product feel instant.",
    forWho: "Products where users interact live: chat, live sessions, tracking and dashboards.",
    includes: [
      "Live data that updates without refreshing",
      "Online/offline presence and live counters",
      "Live audio/video rooms (WebRTC)",
      "Event-driven backend that stays reliable",
    ],
    tech: ["WebSockets", "WebRTC", "Firebase", "Event-driven"],
    price: "Custom quote",
  },
  {
    id: "automation",
    icon: "chart",
    title: "Dashboards & automation",
    short: "See your customers and sales at a glance, and automate repetitive work with small custom tools.",
    forWho: "Owners who manage the business with spreadsheets and WhatsApp messages.",
    includes: [
      "Dashboards for sales, customers and bookings",
      "WhatsApp bots and automatic reminders",
      "AI-powered tools that save hours of manual work",
      "Data stays yours, in tools you understand",
    ],
    tech: ["Python", "AI", "Google Sheets", "WhatsApp"],
    price: "Custom quote",
  },
];
