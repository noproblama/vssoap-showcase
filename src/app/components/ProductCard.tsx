import type { Product } from "../data/products";
import { FadeIn } from "./FadeIn";
import { Sparkles } from "lucide-react";
import { SoapPlaceholder } from "./SoapPlaceholder";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  product: Product;
  index?: number;
  loading?: boolean;
  onClick?: () => void;
}

export function ProductCard({ product, index = 0, loading, onClick }: ProductCardProps) {
  const isPremium = product.category === "premium";
  const isCuring = product.status === "curing";

  return (
    <FadeIn delay={index * 80}>
    <div
      className="group relative h-full rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-sage-200"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        {product.image.startsWith("/") ? (
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <SoapPlaceholder
            name={product.name}
            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        )}

        {/* ── Top-right: premium badge ───────────────────────────────── */}
        {isPremium && (
          <div className="absolute top-4 right-4 inline-flex items-center gap-1 bg-sage-700 text-white px-3 py-1 rounded-full text-sm z-10">
            <Sparkles className="w-3 h-3" />
            Premium
          </div>
        )}

        {/* ── Bottom-left: readiness badge ───────────────────────────── */}
        {product.status && !loading && (
          <div className="absolute bottom-3 left-3 z-10 animate-fade-in">
            {isCuring ? (
              <span className="inline-flex items-center gap-1.5 bg-stone-900/70 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                {product.cureUntil
                  ? `Дозріває до ${product.cureUntil}`
                  : "Дозріває"}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 bg-white/85 backdrop-blur-sm text-sage-800 px-2.5 py-1 rounded-full text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-600" />
                Готове
              </span>
            )}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl text-stone-800">{product.name}</h3>
          {loading ? (
            <span className="inline-block w-24 h-5 rounded bg-stone-200 animate-pulse shrink-0 ml-2" />
          ) : (
            <span className="text-lg text-sage-700 shrink-0 ml-2 animate-fade-in">
              {product.price}
            </span>
          )}
        </div>
        <p className="text-stone-600 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
    </FadeIn>
  );
}
