import { amount } from "./site";

export const packages = [
  {
    name: "Business website",
    price: amount("website"),
    prefix: "from",
    description: "Everything a local business needs to look professional online.",
    features: [
      "Up to 5 pages",
      "Mobile-friendly and fast",
      "WhatsApp button and Google Maps",
      "Google-friendly setup (SEO basics)",
      "Help with domain and hosting setup",
    ],
    featured: false,
  },
  {
    name: "Website + online booking",
    price: amount("booking"),
    prefix: "from",
    description: "Let customers book or order on their own, any time.",
    features: [
      "Everything in Business website",
      "Online booking or ordering",
      "See all bookings in one place",
      "WhatsApp or email confirmations",
      "One month of free fixes",
    ],
    featured: true,
  },
  {
    name: "Mobile app or custom project",
    price: "Custom quote",
    prefix: "",
    description: "Android + iOS apps, web apps, backends and real-time features.",
    features: [
      "Android + iOS from one codebase",
      "Web apps, APIs and admin panels",
      "Fixed price agreed before work starts",
      "Milestone-based payments",
    ],
    featured: false,
  },
];

export const faqs = [
  {
    q: "Can I see something before I pay?",
    a: "Yes. We make a free sample of your homepage first, so you can see what your website will look like before deciding anything.",
  },
  {
    q: "How do payments work?",
    a: "After a free chat we agree a fixed price for your project. You pay 50% to start and 50% when you're happy with the result. Bigger projects are split into milestones.",
  },
  {
    q: "How long does it take?",
    a: "It depends on the size of the project. You get a clear timeline before any work starts, and we share progress as we build.",
  },
  {
    q: "Do I need to buy a domain and hosting?",
    a: "A domain (like yourbusiness.com) is bought in your name and paid directly to the provider. We help you choose and set it up so you always own it.",
  },
  {
    q: "What happens after the website is live?",
    a: "You get one month of free fixes. After that, changes and updates are quick and priced clearly in advance.",
  },
  {
    q: "Can we work together if we're in a different city?",
    a: "Yes. Everything can be done online over WhatsApp and video calls: the free chat, the sample design, progress updates and launch.",
  },
];
