import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import CustomRequest from "@/components/CustomRequest";
import Footer from "@/components/Footer";
import { categories } from "@/lib/catalog";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-gray-200 antialiased">
      <Hero />

      <main
        id="catalog"
        className="max-w-6xl mx-auto px-5 py-12 md:py-16 space-y-14 md:space-y-20 scroll-mt-20"
      >
        {categories.map((cat, i) => (
          <CategorySection key={cat.id} category={cat} index={i} />
        ))}

        <CustomRequest />
      </main>

      <Footer />
    </div>
  );
}
