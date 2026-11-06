import { useEffect, useId, useState } from "react";
import { CreditCard, MessageCircle, X, Copy, Check } from "lucide-react";
import { formatNaira } from "@/lib/catalog";
import { BANK_DETAILS } from "@/lib/bank";
import { buildWhatsAppLink, checkoutMessage } from "@/lib/whatsapp";

export default function CheckoutModal({
  serviceName,
  price,
  onClose,
}: {
  serviceName: string;
  price: number;
  onClose: () => void;
}) {
  const [customerName, setCustomerName] = useState("");
  const [copied, setCopied] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const trimmedName = customerName.trim();
  const whatsappLink = buildWhatsAppLink(
    checkoutMessage(serviceName, formatNaira(price), trimmedName)
  );

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(BANK_DETAILS.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111113] border border-white/10 shadow-2xl p-6 md:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wide text-accent mb-1">
              Manual Payment
            </p>
            <h2
              id={titleId}
              className="text-lg font-extrabold text-white leading-snug"
            >
              {serviceName}
            </h2>
            <p className="text-xl font-extrabold text-white mt-1">
              {formatNaira(price)}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close checkout"
            className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="rounded-xl bg-white/[0.03] border border-white/10 divide-y divide-white/5 mb-5">
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <span className="text-xs text-gray-400">Bank Name</span>
            <span className="text-sm font-semibold text-white">
              {BANK_DETAILS.bankName}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <span className="text-xs text-gray-400">Account Number</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white tracking-wide">
                {BANK_DETAILS.accountNumber}
              </span>
              <button
                type="button"
                onClick={copyAccountNumber}
                aria-label="Copy account number"
                className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <span className="text-xs text-gray-400">Account Name</span>
            <span className="text-sm font-semibold text-white text-right">
              {BANK_DETAILS.accountName}
            </span>
          </div>
        </div>

        <label htmlFor="checkout-name" className="block text-xs font-semibold text-gray-300 mb-2">
          Your full name (as it appears on your transfer)
        </label>
        <input
          id="checkout-name"
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="e.g. Amaka Okafor"
          maxLength={100}
          className="w-full rounded-lg bg-white/5 border border-white/10 focus:border-accent/60 focus:outline-none px-4 py-3 text-sm text-white placeholder:text-gray-500 mb-5 transition-colors"
        />

        <p className="text-xs text-gray-400 leading-relaxed mb-5 rounded-lg bg-accent/5 border border-accent/20 px-4 py-3">
          After you make the transfer, send your payment screenshot via WhatsApp
          so we can confirm and start your order.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-lg bg-accent px-4 py-3 text-sm font-bold text-black hover:brightness-110 transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          Send Screenshot on WhatsApp
        </a>
        <p className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 mt-3">
          <CreditCard className="w-3 h-3" />
          Payments are confirmed manually after your screenshot is received.
        </p>
      </div>
    </div>
  );
}
