import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { SoapPlaceholder } from "./SoapPlaceholder";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";
import {
  BotanicalChamomile,
  BotanicalOlive,
  BotanicalRose,
  BotanicalLavender,
  BotanicalHoneycomb,
  BotanicalHerb,
  BotanicalStrawberry,
} from "./DecorativeElements";
import type { ComponentType } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  detailedDescription?: string;
  ingredients?: string[];
  benefits?: string[];
  additionalImages?: string[];
  videoUrl?: string;
}

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const modalBotanicals: Record<number, ComponentType<{ className?: string }>> = {
  1: BotanicalChamomile,
  2: BotanicalOlive,
  3: BotanicalRose,
  4: BotanicalLavender,
  5: BotanicalHoneycomb,
  6: BotanicalHerb,
  7: BotanicalHerb,
  8: BotanicalRose,
  9: BotanicalChamomile,
  10: BotanicalStrawberry,
  11: BotanicalOlive,
};

export function ProductModal({
  product,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: ProductModalProps) {
  const isPremium = product.category === "premium";
  const [activeIndex, setActiveIndex] = useState(0);

  const allMedia = [
    { type: "image" as const, src: product.image },
    ...(product.additionalImages || []).map((src) => ({
      type: "image" as const,
      src,
    })),
    ...(product.videoUrl
      ? [{ type: "video" as const, src: product.videoUrl }]
      : []),
  ];

  useEffect(() => {
    setActiveIndex(0);
  }, [product.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrevious();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onNext, onPrevious, onClose]);

  const activeMedia = allMedia[activeIndex];
  const ModalBotanical = modalBotanicals[product.id];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 md:p-4"
        onClick={onClose}
      >
        {/* Modal box — full screen on mobile, capped on desktop */}
        <div
          className="relative w-full h-dvh md:h-auto md:max-w-[700px] md:max-h-[92dvh] flex flex-col bg-white rounded-none md:rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <DialogTitle className="sr-only">{product.name}</DialogTitle>

          {/* ── Sticky header: prev / title+price / next / close ── */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-stone-100 px-3 py-2.5 flex items-center gap-1 shrink-0">
            <button
              onClick={onPrevious}
              className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-500 hover:text-stone-800"
              aria-label="Попередній"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex-1 flex items-baseline justify-between px-2 min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <h2 className="text-xl md:text-2xl text-stone-800 truncate">
                  {product.name}
                </h2>
              </div>
              <span className="shrink-0 text-lg md:text-xl text-sage-700 ml-3">
                {product.price}
              </span>
            </div>

            <button
              onClick={onNext}
              className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-500 hover:text-stone-800"
              aria-label="Наступний"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-400 hover:text-stone-700 ml-0.5"
              aria-label="Закрити"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ── Scrollable content ── */}
          <div className="overflow-y-auto overflow-x-hidden flex-1 relative">
            {/* Botanical watermark */}
            {ModalBotanical && (
              <div className="absolute -bottom-8 -right-6 pointer-events-none opacity-[0.07] text-stone-700">
                <ModalBotanical className="w-44 h-auto" />
              </div>
            )}

            <div className="p-4 md:p-6">
              {isPremium && (
                <div className="mb-3 absolute top-6 right-6 md:top-8 md:right-8">
                  <span className="bg-sage-700 text-white px-3 py-1 rounded-full text-xs">
                    Premium
                  </span>
                </div>
              )}
              {/* Main viewer */}

              <div className="aspect-video rounded-xl overflow-hidden bg-stone-100 mb-2">
                {activeMedia.type === "image" ? (
                  activeMedia.src.startsWith("/") ? (
                    <ImageWithFallback
                      src={activeMedia.src}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <SoapPlaceholder
                      name={product.name}
                      className="w-full h-full"
                    />
                  )
                ) : (
                  <video
                    key={activeMedia.src}
                    src={activeMedia.src}
                    controls
                    autoPlay
                    className="w-full h-full"
                  />
                )}
              </div>

              {/* Thumbnail strip */}
              {allMedia.length > 1 && (
                <div className="flex gap-1.5 mb-4">
                  {allMedia.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`relative w-14 h-14 shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                        activeIndex === index
                          ? "border-sage-600"
                          : "border-transparent hover:border-stone-300"
                      }`}
                    >
                      {media.type === "image" ? (
                        media.src.startsWith("/") ? (
                          <ImageWithFallback
                            src={media.src}
                            alt={`${product.name} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <SoapPlaceholder
                            name={product.name}
                            className="w-full h-full"
                          />
                        )
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-stone-200">
                          <Play className="w-5 h-5 text-stone-500" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="mb-4 relative z-10">
                <h3 className="text-lg text-stone-800 mb-1.5">Опис</h3>
                <div className="space-y-2">
                  {(product.detailedDescription || product.description)
                    .split("\n\n")
                    .map((para, i) => {
                      const parts = para.split(/\*\*(.*?)\*\*/g);
                      return (
                        <p
                          key={i}
                          className="text-stone-600 leading-relaxed text-sm md:text-base"
                        >
                          {parts.map((part, j) =>
                            j % 2 === 1 ? (
                              <strong
                                key={j}
                                className="text-stone-800 font-semibold"
                              >
                                {part}
                              </strong>
                            ) : (
                              part
                            ),
                          )}
                        </p>
                      );
                    })}
                </div>
              </div>

              {/* Ingredients */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="mb-4 relative z-10">
                  <h3 className="text-lg text-stone-800 mb-1.5">Склад</h3>
                  <ul className="space-y-1">
                    {product.ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="text-stone-600 text-sm md:text-base flex items-start"
                      >
                        <span className="text-sage-600 mr-2">•</span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="mb-4 relative z-10">
                  <h3 className="text-lg text-stone-800 mb-1.5">
                    Корисні властивості
                  </h3>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="text-stone-600 text-sm md:text-base flex items-start"
                      >
                        <span className="text-green-600 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Order button */}
              <div className="mt-5 pt-4 border-t border-stone-200 relative z-10">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="block w-full text-center bg-sage-600 text-white py-3 px-8 rounded-lg hover:bg-sage-700 transition-all shadow-sm"
                >
                  Замовити {product.name}
                </a>
                <p className="text-center text-stone-400 mt-2 text-xs">
                  ← → для перегляду інших видів мила
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
