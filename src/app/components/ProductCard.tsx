import type { ComponentType } from "react";
import { SoapPlaceholder } from "./SoapPlaceholder";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
  Botanical?: ComponentType<{ className?: string }>;
}

export function ProductCard({ product, onClick, Botanical }: ProductCardProps) {
  const isPremium = product.category === "premium";

  return (
    <div
      className="group relative bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        {product.image.startsWith("/public/") ? (
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
        {isPremium && (
          <div className="absolute top-4 right-4 bg-sage-700 text-white px-3 py-1 rounded-full text-sm z-10">
            Premium
          </div>
        )}
      </div>

      <div className="p-6 relative">
        {Botanical && (
          <div className="absolute -bottom-5 -right-3 pointer-events-none opacity-[0.13]">
            <Botanical className="w-28 h-auto text-stone-600" />
          </div>
        )}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl text-stone-800">{product.name}</h3>
          <span className="text-xl text-sage-700">{product.price}</span>
        </div>
        <p className="text-stone-600 leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
}
