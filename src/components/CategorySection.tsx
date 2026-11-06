import type { ServiceItem, ServiceCategory } from "@/lib/catalog";
import { formatNaira } from "@/lib/catalog";
import { buildWhatsAppLink, inquiryMessage } from "@/lib/whatsapp";
import CheckoutModal from "@/components/CheckoutModal";
import { CreditCard, MessageCircle } from "lucide-react";
import { useState } from "react";

function ServiceCard({
  item,
  categoryTitle,
}: {
  item: ServiceItem;
  categoryTitle: string;
}) {
  const Icon = item.icon;
  const inquiryLink = buildWhatsAppLink(
    inquiryMessage(item.name, categoryTitle)
  );
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const isFixed = item.tier === "fixed" && item.price !== undefined;

  return (
    <>
      <div className="group relative rounded-2xl card-grad border border-white/8 hover:border-white/20 p-5 transition-all duration-300 hover:-translate-y-1">
        {/* Icon row */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border transition-all group-hover:scale-110"
            style={{
              backgroundColor: `${item.accent}12`,
              borderColor: `${item.accent}40`,
            }}
          >
            <Icon
              className="w-6 h-6"
              style={{ color: item.accent }}
              strokeWidth={1.8}
            />
          </div>
          <div className="text-2xl leading-none mt-1">{item.emoji}</div>
        </div>

        {/* Name + description */}
        <h3 className="text-sm md:text-base font-bold text-white leading-snug mb-2">
          {item.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-4 line-clamp-4">
          {item.description}
        </p>

        {/* Price label */}
        <div className="mb-3">
          {isFixed ? (
            <span className="text-lg font-extrabold text-white">
              {formatNaira(item.price!)}
            </span>
          ) : (
            <span className="text-sm font-semibold text-gray-500 italic">
              Rate on Inquiry
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/5">
          {isFixed ? (
            <span className="text-[10px] font-bold text-accent uppercase tracking-wide">
              Fixed Price
            </span>
          ) : (
            <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">
              Custom Quote
            </span>
          )}

          {isFixed ? (
            <button
              type="button"
              onClick={() => setCheckoutOpen(true)}
              className="group/btn flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent hover:text-black transition-all text-xs font-bold text-accent"
            >
              <CreditCard className="w-3.5 h-3.5" />
              Pay & Order
            </button>
          ) : (
            <a
              href={inquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent hover:text-black transition-all text-xs font-bold text-accent"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Inquire
            </a>
          )}
        </div>
      </div>

      {checkoutOpen && isFixed && (
        <CheckoutModal
          serviceName={item.name}
          price={item.price!}
          onClose={() => setCheckoutOpen(false)}
        />
      )}
    </>
  );
}

export default function CategorySection({
  category,
  index,
}: {
  category: ServiceCategory;
  index: number;
}) {
  const CatIcon = category.icon;

  return (
    <section
      id={category.id}
      className="scroll-mt-20"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-5 md:mb-6">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
          <CatIcon className="w-5 h-5 text-white" strokeWidth={1.8} />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-lg">{category.emoji}</span>
            <h2 className="text-lg md:text-xl font-extrabold text-white tracking-tight">
              {category.title}
            </h2>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mt-0.5">
            {category.tagline}
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.items.map((item) => (
          <ServiceCard
            key={item.name}
            item={item}
            categoryTitle={category.title}
          />
        ))}
      </div>
    </section>
  );
}
