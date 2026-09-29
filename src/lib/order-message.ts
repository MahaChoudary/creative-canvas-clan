import { formatPrice } from "@/config/site";
import type { CartItem } from "@/lib/cart";

export type CheckoutDetails = {
  name: string;
  phone: string;
  city: string;
  address: string;
  notes?: string;
};

export function buildOrderMessage(
  details: CheckoutDetails,
  items: CartItem[],
  subtotal: number,
): string {
  const lines: string[] = [];
  lines.push("Hello Afroz Artistry! I would like to place an order.", "");
  lines.push("CUSTOMER DETAILS");
  lines.push(`Name: ${details.name}`);
  lines.push(`Phone: ${details.phone}`);
  lines.push(`City: ${details.city}`);
  lines.push(`Address: ${details.address}`, "");
  lines.push("ORDER DETAILS", "");

  items.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.name}`);
    lines.push(`Quantity: ${item.quantity}`);
    lines.push(`Price: ${formatPrice(item.price * item.quantity)}`);
    const custom = Object.entries(item.customization)
      .map(([k, v]) => `${k}: ${v}`)
      .join(", ");
    lines.push(`Customization: ${custom || "None"}`);
    lines.push("");
  });

  lines.push(`Subtotal: ${formatPrice(subtotal)}`, "");
  lines.push(`Notes: ${details.notes?.trim() || "None"}`, "");
  lines.push(
    "Please confirm availability, delivery charges and payment details. Thank you!",
  );

  return lines.join("\n");
}

export type CustomiseDetails = {
  recipient: string;
  occasion: string;
  giftType: string;
  budget: string;
  colors: string;
  personalMessage: string;
  notes: string;
  inspirationFiles: string[];
};

export function buildCustomiseMessage(d: CustomiseDetails): string {
  const lines = [
    "Hello Afroz Artistry! I'd like to request a custom gift.",
    "",
    "CUSTOM GIFT REQUEST",
    `Who is it for: ${d.recipient || "-"}`,
    `Occasion: ${d.occasion || "-"}`,
    `Gift type / idea: ${d.giftType || "-"}`,
    `Budget range: ${d.budget || "-"}`,
    `Preferred colours / theme: ${d.colors || "-"}`,
    `Personal message: ${d.personalMessage || "-"}`,
    `Additional notes: ${d.notes || "-"}`,
  ];
  if (d.inspirationFiles.length) {
    lines.push(`Inspiration images ready to send: ${d.inspirationFiles.join(", ")}`);
  }
  lines.push("", "Please guide me on availability and pricing. Thank you!");
  return lines.join("\n");
}
