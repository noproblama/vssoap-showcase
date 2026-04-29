import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SoapPlaceholder } from './SoapPlaceholder';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect } from 'react';

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        onPrevious();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onNext, onPrevious, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
        <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto m-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-stone-100 transition-colors"
          >
            <X className="w-6 h-6 text-stone-600" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-stone-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-stone-600" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-stone-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-stone-600" />
          </button>

          <div className="p-8 md:p-12">
            <DialogTitle className="sr-only">{product.name}</DialogTitle>

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-4xl text-stone-800 mb-2">
                  {product.name}
                </h2>
                {isPremium && (
                  <span className="inline-block bg-sage-700 text-white px-3 py-1 rounded-full text-sm">
                    Premium
                  </span>
                )}
              </div>
              <div className="text-3xl text-sage-700">
                {product.price}
              </div>
            </div>

            {/* Main image */}
            <div className="aspect-video rounded-xl overflow-hidden bg-stone-100 mb-6">
              {product.image.startsWith('/src/imports/') ? (
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <SoapPlaceholder
                  name={product.name}
                  className="w-full h-full"
                />
              )}
            </div>

            {/* Video if available */}
            {product.videoUrl && (
              <div className="aspect-video rounded-xl overflow-hidden bg-stone-100 mb-6">
                <video
                  src={product.videoUrl}
                  controls
                  className="w-full h-full"
                  poster={product.image}
                >
                  Ваш браузер не підтримує відео.
                </video>
              </div>
            )}

            {/* Additional images */}
            {product.additionalImages && product.additionalImages.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mb-6">
                {product.additionalImages.map((img, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden bg-stone-100">
                    <ImageWithFallback
                      src={img}
                      alt={`${product.name} - фото ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-2xl text-stone-800 mb-3">Опис</h3>
              <p className="text-stone-600 leading-relaxed text-lg">
                {product.detailedDescription || product.description}
              </p>
            </div>

            {/* Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mb-6">
                <h3 className="text-2xl text-stone-800 mb-3">Склад</h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-stone-600 text-lg flex items-start">
                      <span className="text-sage-600 mr-2">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="mb-6">
                <h3 className="text-2xl text-stone-800 mb-3">Корисні властивості</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="text-stone-600 text-lg flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Order button */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <button className="w-full bg-sage-600 text-white py-4 px-8 rounded-lg hover:bg-sage-700 transition-all text-lg shadow-sm">
                Замовити {product.name}
              </button>
              <p className="text-center text-stone-500 mt-4 text-sm">
                Замовлення приймаємо через Instagram, Telegram або телефон
              </p>
              <p className="text-center text-stone-400 mt-2 text-xs">
                Підказка: використовуйте стрілки ← → для перегляду інших видів мила
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
