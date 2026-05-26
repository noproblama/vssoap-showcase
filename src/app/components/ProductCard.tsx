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
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const isPremium = product.category === "premium";

  return (
    <div
      className="group relative rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-sage-200"
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
        {isPremium && (
          <div className="absolute top-4 right-4 bg-sage-700 text-white px-3 py-1 rounded-full text-sm z-10">
            Premium
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl text-stone-800">{product.name}</h3>
          <span className="text-lg text-sage-700 shrink-0 ml-2">
            {product.price}
          </span>
        </div>
        <p className="text-stone-600 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
}
