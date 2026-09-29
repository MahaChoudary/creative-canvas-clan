import { MessageCircle } from "lucide-react";
import { whatsappInquiryMessage, whatsappLink } from "@/config/site";

/** Floating general-inquiry WhatsApp button. Separate from the checkout action. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(whatsappInquiryMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Afroz Artistry on WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-dusty sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-sm font-medium sm:inline">Chat with us</span>
    </a>
  );
}
