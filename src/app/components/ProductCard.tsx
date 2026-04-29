import { ImageWithFallback } from './ImageWithFallback';

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
}

export function ProductCard({ product }: ProductCardProps) {
  const isPremium = product.category === 'premium';

  return (
    <div className="group relative bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {isPremium && (
          <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
            Premium
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl text-stone-800">
            {product.name}
          </h3>
          <span className="text-xl text-amber-700">
            {product.price}
          </span>
        </div>
        <p className="text-stone-600 leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
}
