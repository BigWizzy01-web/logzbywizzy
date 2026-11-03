import { Zap, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const link = buildWhatsAppLink(
    "Yo Wizzy — reaching out from the site. What's good?"
  );

  return (
    <footer className="mt-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
              <Zap className="w-4 h-4 text-accent" fill="currentColor" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-white">
                LogzByWizzy
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                Straight Business
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent/20 transition-all text-sm font-semibold text-accent"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp: +234 702 588 2685
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-gray-600 leading-relaxed">
            Find the tool. Make the move. Get it handled.
          </p>
          <p className="text-[10px] text-gray-700 mt-2">
            All services for serious inquiries only. DM to discuss rates and
            delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}
