/**
 * CENTRAL BUSINESS CONFIGURATION — replace placeholder values when final details arrive.
 * DEV PLACEHOLDER values are marked below.
 */

export const site = {
  name: "Afroz Artistry",
  tagline: "Personalised gifting, made by hand",
  city: "Daska, Pakistan",
  delivery: "Nationwide delivery across Pakistan",

  /** DEV PLACEHOLDER — final WhatsApp number pending. Digits only, with country code. */
  whatsappNumber: "923000000000",

  /** DEV PLACEHOLDER — replace with the real Instagram profile URL. */
  instagramUrl: "https://instagram.com/afrozartistry",

  currency: "Rs.",
} as const;

export const whatsappInquiryMessage =
  "Hi Afroz Artistry! I'm interested in placing a customized gift order. Could you please guide me?";

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(amount: number): string {
  return `${site.currency} ${amount.toLocaleString("en-PK")}`;
}
