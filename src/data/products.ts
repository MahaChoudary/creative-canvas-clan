/**
 * PRODUCT DATA LAYER — DEV PLACEHOLDER DATA.
 * Final wallet card images, prices and copy are pending. Replace the objects
 * below; no product content should ever live inside page components.
 */
import g1 from "@/assets/g1.asset.json";
import g2 from "@/assets/g2.asset.json";
import g3 from "@/assets/g3.asset.json";
import g4 from "@/assets/g4.asset.json";
import g5 from "@/assets/g5.asset.json";
import g6 from "@/assets/g6.asset.json";
import g7 from "@/assets/g7.asset.json";

export type CustomizationOption = {
  id: string;
  label: string;
  choices: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  shortDescription: string;
  description: string;
  includes: string[];
  customizationOptions: CustomizationOption[];
  occasions: string[];
  availability: "in-stock" | "made-to-order";
  featured: boolean;
  badge?: string;
};

const nameOn: CustomizationOption = {
  id: "name",
  label: "Name on card",
  choices: ["Add a name", "No name"],
};

const finish: CustomizationOption = {
  id: "finish",
  label: "Finish",
  choices: ["Matte", "Glossy", "Soft-touch"],
};

const cardColour: CustomizationOption = {
  id: "colour",
  label: "Colour theme",
  choices: ["Blush", "Cream", "Rose gold", "Deep brown"],
};

/** DEV PLACEHOLDER wallet cards — realistic demo data until real catalogue is supplied. */
export const products: Product[] = [
  {
    id: "wc-01",
    slug: "classic-blush-wallet-card",
    name: "Classic Blush Wallet Card",
    category: "Wallet Cards",
    price: 900,
    images: [g2.url, g1.url],
    shortDescription: "A handwritten-style keepsake card sized to live in a wallet.",
    description:
      "A wallet-sized keepsake card printed on premium textured stock and finished by hand. Carry a message that stays close, long after the occasion has passed.",
    includes: ["1 wallet-size card", "Personalised message", "Protective sleeve", "Gift envelope"],
    customizationOptions: [nameOn, finish, cardColour],
    occasions: ["Birthday", "Anniversary", "Just because"],
    availability: "made-to-order",
    featured: true,
    badge: "Bestseller",
  },
  {
    id: "wc-02",
    slug: "photo-memory-wallet-card",
    name: "Photo Memory Wallet Card",
    category: "Wallet Cards",
    price: 1200,
    images: [g1.url, g2.url],
    shortDescription: "Your favourite photo, printed and framed in a pocket-size card.",
    description:
      "A photo card made to be carried. Send us one image and a short note; we set it in a soft editorial layout and finish the edges by hand.",
    includes: ["1 photo wallet card", "Custom photo printing", "Message on reverse", "Protective sleeve"],
    customizationOptions: [nameOn, finish],
    occasions: ["Anniversary", "Long distance", "Farewell"],
    availability: "made-to-order",
    featured: true,
    badge: "Most personal",
  },
  {
    id: "wc-03",
    slug: "for-him-wallet-card",
    name: "For Him Wallet Card",
    category: "Wallet Cards",
    price: 1000,
    images: [g3.url, g4.url],
    shortDescription: "Understated, deep-toned card designed to slip into his wallet.",
    description:
      "A quieter design in deep tones with a clean serif layout. Made for the person who keeps things simple but holds on to what matters.",
    includes: ["1 wallet-size card", "Personalised message", "Matte protective sleeve"],
    customizationOptions: [nameOn, finish],
    occasions: ["Birthday", "Anniversary", "Thank you"],
    availability: "made-to-order",
    featured: true,
  },
  {
    id: "wc-04",
    slug: "newspaper-mini-wallet-card",
    name: "Newspaper Mini Wallet Card",
    category: "Wallet Cards",
    price: 1400,
    images: [g5.url, g6.url, g7.url],
    shortDescription: "Our signature birthday newspaper, shrunk into a carry-anywhere card.",
    description:
      "The same headline treatment as our personalised birthday newspaper, laid out at wallet scale. Their name in print, their photo on the front page.",
    includes: ["1 wallet-size newspaper card", "Photo and headline setup", "Protective sleeve", "Gift envelope"],
    customizationOptions: [nameOn, cardColour],
    occasions: ["Birthday", "Milestone"],
    availability: "made-to-order",
    featured: true,
    badge: "Signature",
  },
  {
    id: "wc-05",
    slug: "love-note-wallet-card-set",
    name: "Love Note Wallet Card Set",
    category: "Wallet Cards",
    price: 1800,
    images: [g2.url, g5.url],
    shortDescription: "A set of three cards, one message each, to be opened over time.",
    description:
      "Three coordinated wallet cards with three separate notes. Give them together, or hand one over at a time across the year.",
    includes: ["3 wallet-size cards", "3 personalised messages", "Ribbon-tied envelope"],
    customizationOptions: [nameOn, cardColour, finish],
    occasions: ["Anniversary", "Valentine's", "Long distance"],
    availability: "made-to-order",
    featured: false,
  },
  {
    id: "wc-06",
    slug: "gratitude-wallet-card",
    name: "Gratitude Wallet Card",
    category: "Wallet Cards",
    price: 800,
    images: [g7.url, g3.url],
    shortDescription: "A small thank-you that fits in a pocket and stays there.",
    description:
      "A clean, calm card for the people who quietly hold everything together. Short message, warm palette, no clutter.",
    includes: ["1 wallet-size card", "Personalised message", "Gift envelope"],
    customizationOptions: [nameOn, cardColour],
    occasions: ["Thank you", "Teacher", "Eid"],
    availability: "in-stock",
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

/** Curated gallery imagery from real Afroz Artistry creations. */
export const galleryImages: { url: string; alt: string }[] = [
  { url: g2.url, alt: "Pink beauty photo gift box with framed photo, hand cream and chocolates" },
  { url: g1.url, alt: "Purple themed gift arrangement with bow, bangles and sparklers" },
  { url: g3.url, alt: "Gift box for him with watch, wallet, cap and handwritten cards" },
  { url: g4.url, alt: "Premium gift box with shirt, cap, wallet and framed photo" },
  { url: g5.url, alt: "Personalised birthday newspaper held up outdoors" },
  { url: g6.url, alt: "Personalised birthday newspaper opened to puzzle spread" },
];

/** DEV PLACEHOLDER reviews — replace with real customer reviews. */
export const reviews = [
  {
    name: "Placeholder Customer",
    city: "Lahore",
    text: "Placeholder review copy. Replace with a real customer review once available.",
  },
  {
    name: "Placeholder Customer",
    city: "Karachi",
    text: "Placeholder review copy. Replace with a real customer review once available.",
  },
  {
    name: "Placeholder Customer",
    city: "Sialkot",
    text: "Placeholder review copy. Replace with a real customer review once available.",
  },
];
