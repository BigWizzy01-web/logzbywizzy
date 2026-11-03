import { buildWhatsAppLink } from "./whatsapp";

const PAYSTACK_PUBLIC_KEY = "pk_test_9f42494ac5f67aa1570271";

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: {
        key: string;
        email: string;
        amount: number;
        currency: string;
        ref: string;
        callback: (response: { reference: string }) => void;
        onClose: () => void;
      }) => { openIframe: () => void };
    };
  }
}

export function startPaystackCheckout(
  itemName: string,
  amountInNaira: number
): void {
  const ref = `LBW-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  const handler = window.PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email: "customer@logzbywizzy.com",
    amount: amountInNaira * 100,
    currency: "NGN",
    ref,
    callback: (response) => {
      const message = `Yo Wizzy — I just paid for "${itemName}".\n\nPrice: ₦${amountInNaira.toLocaleString(
        "en-NG"
      )}\nPayment Reference: ${response.reference}\n\nReady for delivery. Let's move.`;
      window.location.href = buildWhatsAppLink(message);
    },
    onClose: () => {},
  });
  handler.openIframe();
}
