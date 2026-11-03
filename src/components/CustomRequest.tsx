import { MessageCircle, ArrowRight, Lock } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function CustomRequest() {
  const customLink = buildWhatsAppLink(
    "Yo Wizzy — I got a custom request. It ain't on the catalog but I need a specific digital tool / setup / service. Let me break it down for you..."
  );

  return (
    <section id="custom-request" className="scroll-mt-20">
      <div className="relative rounded-3xl overflow-hidden border border-accent/20">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-black to-gold/5" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(0,230,118,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(255,179,0,0.3) 0%, transparent 40%)",
          }}
        />

        <div className="relative p-7 md:p-12 text-center">
          {/* Lock badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <Lock className="w-3.5 h-3.5 text-accent" />
            <span className="text-[11px] font-bold text-accent uppercase tracking-widest">
              Exclusive Access
            </span>
          </div>

          <div className="text-4xl mb-4">⚡</div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4">
            Custom Requests & General Hustle
          </h2>

          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Need a specific tool, secret setup, or custom digital service not
            listed here? DM me directly on WhatsApp with your request —{" "}
            <span className="text-accent font-semibold">
              we handle all custom setups for serious hustlers.
            </span>
          </p>

          <a
            href={customLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-accent text-black font-extrabold text-sm md:text-base hover:bg-accent-dim transition-all glow-accent hover:glow-accent-strong"
          >
            <MessageCircle className="w-5 h-5" />
            DM me your custom request
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              "Discrete delivery",
              "Serious inquiries only",
              "Fast turnaround",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 text-xs text-gray-400"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
