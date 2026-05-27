import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { FadeIn } from "./FadeIn";
import { BotanicalPatternBg } from "./DecorativeElements";
import { products } from "../data/products";
import { useSheetData } from "../lib/useSheetData";

export function ProductGrid() {
  const [selectedProductIndex, setSelectedProductIndex] = useState<
    number | null
  >(null);

  const { data: sheetData, loading: sheetLoading } = useSheetData();

  // Merge static catalogue with live overrides from Google Sheets
  const mergedProducts = products.map((p) => ({
    ...p,
    ...sheetData[p.id],
  }));

  const handleOpenModal = (index: number) => setSelectedProductIndex(index);
  const handleCloseModal = () => setSelectedProductIndex(null);

  const handleNext = () => {
    if (selectedProductIndex !== null)
      setSelectedProductIndex(
        (selectedProductIndex + 1) % mergedProducts.length,
      );
  };

  const handlePrevious = () => {
    if (selectedProductIndex !== null)
      setSelectedProductIndex(
        (selectedProductIndex - 1 + mergedProducts.length) %
          mergedProducts.length,
      );
  };

  return (
    <section
      className="relative py-20 px-6 bg-[#F9F6F1] overflow-hidden"
      id="products"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] text-stone-600">
        <BotanicalPatternBg />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-800">
            Наші вироби
          </h2>
          <p className="text-center text-stone-600 mb-16 text-lg">
            Кожен шматок створений лише з натуральних інгредієнтів
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
