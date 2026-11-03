import { Zap, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const generalInquiry = buildWhatsAppLink(
    "Yo Wizzy — I found LogzByWizzy. Need to know what tools you got available right now. Ready to move."
  );

  return (
    <header className="relative hero-grad border-b border-white/5 overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 pt-10 pb-14 md:pt-16 md:pb-20">
        {/* Logo bar */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center glow-accent">
                <Zap className="w-5 h-5 text-accent" fill="currentColor" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-accent/20 blur-lg -z-10" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-white leading-none">
                LogzByWizzy
              </h1>
              <p className="text-[10px] text-gray-500 font-medium tracking-wide uppercase mt-0.5">
                Digital Services Agency
              </p>
            </div>
          </div>

          <a
            href={generalInquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3.5 py-2 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent/20 transition-all text-sm font-semibold text-accent"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Hit me up</span>
          </a>
        </div>

        {/* Hero content */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wide">
              Online & taking orders now
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight animate-slide-up">
            Straight Business.
            <br />
            <span className="text-accent">Find the tool.</span>{" "}
            <span className="text-gold">Make the move.</span>
            <br />
            <span className="text-white">Get it handled.</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Your trusted hub for premium digital tools, advanced setups,
            verification, and growth services. Professional delivery, zero
            hassle. You need it, I got it. DM to move.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center animate-slide-up">
            <a
              href="#catalog"
              className="px-6 py-3.5 rounded-xl bg-accent text-black font-bold text-sm hover:bg-accent-dim transition-all glow-accent hover:glow-accent-strong"
            >
              Browse the catalog
            </a>
            <a
              href="#custom-request"
              className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-bold text-sm hover:bg-white/10 transition-all"
            >
              Got a custom request?
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-12 flex items-center justify-center gap-6 md:gap-10">
            {[
              { num: "6", label: "Categories" },
              { num: "15+", label: "Tools & Services" },
              { num: "24/7", label: "DM Response" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-white">
                  {stat.num}
                </div>
                <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
