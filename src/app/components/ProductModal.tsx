import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { SoapPlaceholder } from './SoapPlaceholder';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';

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

export function ProductModal({ product, isOpen, onClose, onNext, onPrevious }: ProductModalProps) {
  const isPremium = product.category === 'premium';
  const [activeIndex, setActiveIndex] = useState(0);

  const allMedia = [
    { type: 'image' as const, src: product.image },
    ...(product.additionalImages || []).map(src => ({ type: 'image' as const, src })),
    ...(product.videoUrl ? [{ type: 'video' as const, src: product.videoUrl }] : []),
  ];

  useEffect(() => {
    setActiveIndex(0);
  }, [product.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') onPrevious();
      else if (e.key === 'ArrowRight') onNext();
      else if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onNext, onPrevious, onClose]);

  const activeMedia = allMedia[activeIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Left arrow — outside the modal box */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrevious(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
        >
          <ChevronLeft className="w-7 h-7 text-white" />
        </button>

        {/* Modal box — narrower than viewport so arrows are always visible */}
        <div
          className="absolute inset-y-4 left-14 right-14 md:inset-y-8 md:left-20 md:right-20 max-w-2xl mx-auto overflow-y-auto bg-white rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5 text-stone-600" />
          </button>

          <div className="p-5 md:p-7">
            <DialogTitle className="sr-only">{product.name}</DialogTitle>

            {/* Header */}
            <div className="flex justify-between items-start mb-4 pr-8">
              <div>
                <h2 className="text-2xl md:text-3xl text-stone-800 mb-1">{product.name}</h2>
                {isPremium && (
                  <span className="inline-block bg-sage-700 text-white px-3 py-0.5 rounded-full text-sm">
                    Premium
                  </span>
                )}
              </div>
              <div className="text-xl md:text-2xl text-sage-700 shrink-0">{product.price}</div>
            </div>

            {/* Main viewer */}
            <div className="aspect-video rounded-xl overflow-hidden bg-stone-100 mb-2">
              {activeMedia.type === 'image' ? (
                activeMedia.src.startsWith('/src/imports/') ? (
                  <ImageWithFallback
                    src={activeMedia.src}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <SoapPlaceholder name={product.name} className="w-full h-full" />
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
                        ? 'border-sage-600'
                        : 'border-transparent hover:border-stone-300'
                    }`}
                  >
                    {media.type === 'image' ? (
                      media.src.startsWith('/src/imports/') ? (
                        <ImageWithFallback
                          src={media.src}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <SoapPlaceholder name={product.name} className="w-full h-full" />
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
            <div className="mb-4">
              <h3 className="text-lg text-stone-800 mb-1.5">Опис</h3>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                {product.detailedDescription || product.description}
              </p>
            </div>

            {/* Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg text-stone-800 mb-1.5">Склад</h3>
                <ul className="space-y-1">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-stone-600 text-sm md:text-base flex items-start">
                      <span className="text-sage-600 mr-2">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg text-stone-800 mb-1.5">Корисні властивості</h3>
                <ul className="space-y-1">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="text-stone-600 text-sm md:text-base flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Order button */}
            <div className="mt-5 pt-4 border-t border-stone-200">
              <button className="w-full bg-sage-600 text-white py-3 px-8 rounded-lg hover:bg-sage-700 transition-all shadow-sm">
                Замовити {product.name}
              </button>
              <p className="text-center text-stone-500 mt-3 text-sm">
                Замовлення приймаємо через Instagram, Telegram або телефон
              </p>
              <p className="text-center text-stone-400 mt-1 text-xs">
                Підказка: стрілки ← → для перегляду інших видів мила
              </p>
            </div>
          </div>
        </div>

        {/* Right arrow — outside the modal box */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
        >
          <ChevronRight className="w-7 h-7 text-white" />
        </button>
      </DialogContent>
    </Dialog>
  );
}
