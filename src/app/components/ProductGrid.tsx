import { useState, useEffect, useRef } from "react";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { FadeIn } from "./FadeIn";
import { BotanicalPatternBg } from "./DecorativeElements";
import { products } from "../data/products";
import { useSheetData } from "../lib/useSheetData";

function setProductInUrl(slug: string | null) {
  const url = new URL(window.location.href);
  if (slug !== null) {
    url.searchParams.set("product", slug);
  } else {
    url.searchParams.delete("product");
  }
  window.history.pushState({}, "", url.toString());
}

export function ProductGrid({ initialSlug }: { initialSlug?: string | null }) {
  const [selectedProductIndex, setSelectedProductIndex] = useState<
    number | null
  >(null);
  const didOpenInitial = useRef(false);

  const { data: sheetData, loading: sheetLoading } = useSheetData();

  // Merge static catalogue with live overrides from Google Sheets
  const mergedProducts = products.map((p) => ({
    ...p,
    ...sheetData[p.id],
  }));

  // Open initial product from URL on first render
  useEffect(() => {
    if (didOpenInitial.current || !initialSlug) return;
    const idx = products.findIndex((p) => p.slug === initialSlug.toLowerCase());
    if (idx === -1) return;
    didOpenInitial.current = true;
    const timer = setTimeout(() => {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
      setSelectedProductIndex(idx);
    }, 350);
    return () => clearTimeout(timer);
  }, []); // intentionally runs once on mount

  const handleOpenModal = (index: number) => {
    setSelectedProductIndex(index);
    setProductInUrl(mergedProducts[index].slug);
  };
  const handleCloseModal = () => {
    setSelectedProductIndex(null);
    setProductInUrl(null);
  };

  const handleNext = () => {
    if (selectedProductIndex === null) return;
    const nextIdx = (selectedProductIndex + 1) % mergedProducts.length;
    setSelectedProductIndex(nextIdx);
    setProductInUrl(mergedProducts[nextIdx].slug);
  };

  const handlePrevious = () => {
    if (selectedProductIndex === null) return;
    const prevIdx = (selectedProductIndex - 1 + mergedProducts.length) % mergedProducts.length;
    setSelectedProductIndex(prevIdx);
    setProductInUrl(mergedProducts[prevIdx].slug);
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
            Каталог
          </span>
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-800">
            Моє крафтове мило
          </h2>
          <p className="text-center text-stone-600 mb-16 text-lg">
            Кожен брусок створений виключно з натуральних інгредієнтів
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mergedProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              loading={sheetLoading}
              onClick={() => handleOpenModal(index)}
            />
          ))}
        </div>
      </div>

      {selectedProductIndex !== null && (
        <ProductModal
          product={mergedProducts[selectedProductIndex]}
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
