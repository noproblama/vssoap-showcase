import { useState, useEffect, useRef } from "react";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { FadeIn } from "./FadeIn";
import { BotanicalPatternBg } from "./DecorativeElements";
import { products } from "../data/products";
import { useSheetData } from "../lib/useSheetData";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";
import { trackProductView } from "../lib/analytics";

function setProductInUrl(slug: string | null) {
  const url = new URL(window.location.href);
  if (slug !== null) {
    url.searchParams.set("product", slug);
  } else {
    url.searchParams.delete("product");
  }
  window.history.pushState({}, "", url.toString());
}

function extractPrice(price: string): number {
  const match = price.match(/\d+/);
  return match ? parseInt(match[0], 10) : Infinity;
}

export function ProductGrid({ initialSlug }: { initialSlug?: string | null }) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const didOpenInitial = useRef(false);
  const { lang } = useLang();
  const T = translations[lang];

  const { data: sheetData, loading: sheetLoading } = useSheetData();

  // Merge static catalogue with live overrides from Google Sheets
  const mergedProducts = products.map((p) => ({
    ...p,
    ...sheetData[p.id],
  }));

  const displayProducts = [...mergedProducts].sort((a, b) => {
    const aIsSet = a.category === "sets";
    const bIsSet = b.category === "sets";
    if (aIsSet !== bIsSet) return aIsSet ? 1 : -1;
    const aCuring = a.status === "curing";
    const bCuring = b.status === "curing";
    if (aCuring !== bCuring) return aCuring ? 1 : -1;
    return extractPrice(a.price) - extractPrice(b.price);
  });

  const selectedProductIndex =
    selectedSlug !== null
      ? displayProducts.findIndex((p) => p.slug === selectedSlug)
      : null;

  // Open initial product from URL on first render
  useEffect(() => {
    if (didOpenInitial.current || !initialSlug) return;
    const exists = products.some((p) => p.slug === initialSlug.toLowerCase());
    if (!exists) return;
    didOpenInitial.current = true;
    const timer = setTimeout(() => {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
      setSelectedSlug(initialSlug.toLowerCase());
    }, 350);
    return () => clearTimeout(timer);
  }, []); // intentionally runs once on mount

  const handleOpenModal = (slug: string) => {
    setSelectedSlug(slug);
    setProductInUrl(slug);
    const p = displayProducts.find((x) => x.slug === slug);
    if (p) trackProductView(p.name, slug);
  };
  const handleCloseModal = () => {
    setSelectedSlug(null);
    setProductInUrl(null);
  };

  const handleNext = () => {
    if (selectedProductIndex === null || selectedProductIndex === -1) return;
    const nextIdx = (selectedProductIndex + 1) % displayProducts.length;
    const nextSlug = displayProducts[nextIdx].slug;
    setSelectedSlug(nextSlug);
    setProductInUrl(nextSlug);
  };

  const handlePrevious = () => {
    if (selectedProductIndex === null || selectedProductIndex === -1) return;
    const prevIdx =
      (selectedProductIndex - 1 + displayProducts.length) % displayProducts.length;
    const prevSlug = displayProducts[prevIdx].slug;
    setSelectedSlug(prevSlug);
    setProductInUrl(prevSlug);
  };

  return (
    <section
      className="relative py-20 px-6 bg-[#F2E9D8] overflow-hidden"
      id="products"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] text-stone-600">
        <BotanicalPatternBg />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn>
          <span className="block text-center text-[10px] tracking-[0.25em] uppercase text-sage-600 font-semibold mb-3">
            {T.products_label}
          </span>
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-800">
            {T.products_h2}
          </h2>
          <p className="text-center text-stone-600 mb-16 text-lg">
            {T.products_subtitle}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              loading={sheetLoading}
              onClick={() => handleOpenModal(product.slug)}
            />
          ))}
        </div>
      </div>

      {selectedProductIndex !== null && selectedProductIndex !== -1 && (
        <ProductModal
          product={displayProducts[selectedProductIndex]}
          isOpen={true}
          loading={sheetLoading}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </section>
  );
}
