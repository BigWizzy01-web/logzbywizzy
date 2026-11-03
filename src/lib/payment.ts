import { buildWhatsAppLink } from "./whatsapp";

const PAYSTACK_PUBLIC_KEY = "pk_test_9f42494ac5f67aa1570271";
const PAYSTACK_SCRIPT_URL = "https://js.paystack.co/v1/inline.js";

declare global {
  interface Window {
    PaystackPop?: {
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

function ensurePaystackLoaded(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.PaystackPop) {
      resolve();
      return;
    }

    const existing = document.querySelector(
      `script[src="${PAYSTACK_SCRIPT_URL}"]`
    ) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error("Failed to load Paystack script"))
      );
      return;
    }

    const script = document.createElement("script");
    script.src = PAYSTACK_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("Failed to load Paystack script"));
    document.head.appendChild(script);
  });
}

export async function startPaystackCheckout(
  itemName: string,
  amountInNaira: number
): Promise<void> {
  try {
    await ensurePaystackLoaded();

    if (!window.PaystackPop) {
      alert(
        "Payment system is loading. Please try again in a moment."
      );
      return;
    }

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
  } catch {
    alert(
      "Could not start payment. Please check your connection and try again."
    );
  }
}
