export const WHATSAPP_NUMBER = "2347025882685";

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function checkoutMessage(
  serviceName: string,
  formattedPrice: string,
  customerName: string
): string {
  const from = customerName ? ` Name: ${customerName}.` : "";
  return `Yo Wizzy — I've made a manual transfer of ${formattedPrice} for "${serviceName}". Sending my payment screenshot now.${from}`;
}

export function inquiryMessage(serviceName: string, category?: string): string {
  const cat = category ? `[${category}] ` : "";
  return `${cat}Yo Wizzy — I'm interested in "${serviceName}". Need the current rate and details. Ready to move.`;
}
