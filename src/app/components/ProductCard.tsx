import { useRef } from "react";
import type { Product } from "../data/products";
import { FadeIn } from "./FadeIn";
import { Sparkles, ArrowRight } from "lucide-react";
import { SoapPlaceholder } from "./SoapPlaceholder";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";

interface ProductCardProps {
  product: Product;
  index?: number;
  loading?: boolean;
  onClick?: () => void;
}

function ProfileMini({ profile }: { profile?: import("../data/products").SoapProfile }) {
  const { lang } = useLang();
  const T = translations[lang];
  if (!profile) return null;
  const { scent, lather, hardness, skinType } = profile;

  return (
    <div className="mt-3 pt-3 border-t border-stone-200/70 grid grid-cols-2 gap-x-3 gap-y-2.5">
      {scent && (
        <div>
          <div className="text-[8px] uppercase tracking-wider text-stone-600 mb-0.5">
            {T.card_scent}
          </div>
          <p className="text-[10px] text-stone-600 leading-snug mb-1">
            {scent.label}
          </p>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`h-[3px] flex-1 rounded-full ${i <= scent.intensity ? "bg-amber-400" : "bg-stone-200"}`}
              />
            ))}
          </div>
        </div>
      )}
      {lather && (
        <div>
          <div className="text-[8px] uppercase tracking-wider text-stone-600 mb-0.5">
            {T.card_lather}
          </div>
          <p className="text-[10px] text-stone-600 leading-snug mb-1">
            {lather.label}
          </p>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`h-[3px] flex-1 rounded-full ${i <= lather.strength ? "bg-sage-500" : "bg-stone-200"}`}
              />
            ))}
          </div>
        </div>
      )}
      {hardness && (
        <div>
          <div className="text-[8px] uppercase tracking-wider text-stone-600 mb-0.5">
            {T.card_hardness}
          </div>
          <p className="text-[10px] text-stone-600 leading-snug mb-1">
            {hardness.label}
          </p>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`h-[3px] flex-1 rounded-full ${i <= hardness.level ? "bg-sage-700" : "bg-stone-200"}`}
              />
            ))}
          </div>
        </div>
      )}
      {skinType && (
        <div>
          <div className="text-[8px] uppercase tracking-wider text-stone-600 mb-1">
            {T.card_skintype}
          </div>
          <p className="text-[10px] text-stone-600 leading-snug">{skinType}</p>
        </div>
      )}
    </div>
  );
}

export function ProductCard({
  product,
  index = 0,
  loading,
  onClick,
}: ProductCardProps) {
  const isPremium = product.category === "premium";
  const isCuring = product.status === "curing";
  const videoRef = useRef<HTMLVideoElement>(null);
  const { lang } = useLang();
  const T = translations[lang];
  const name = lang === "en" ? (product.en?.name ?? product.name) : product.name;
  const tagline = lang === "en" ? (product.en?.tagline ?? product.tagline) : product.tagline;
  const benefits = lang === "en" ? (product.en?.benefits ?? product.benefits) : product.benefits;
  const price = lang === "en" ? (product.price_en ?? product.price) : product.price;
  const cureUntil = lang === "en" ? (product.cureUntil_en ?? product.cureUntil) : product.cureUntil;
  const profile = lang === "en" ? (product.en?.profile ?? product.profile) : product.profile;

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <FadeIn delay={index * 80}>
      <div
        className="group relative h-full rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-[#F9F6F1]/70 backdrop-blur-md border border-[#F9F6F1]/90"
        onClick={onClick}
      >
        <div
          className="relative aspect-square overflow-hidden bg-stone-100"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {product.image.startsWith("/") ? (
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-500 ${
                product.videoUrl
                  ? "group-hover:opacity-0"
                  : "group-hover:scale-105"
              }`}
            />
          ) : (
            <SoapPlaceholder
              name={product.name}
              className="w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          )}

          {/* Video overlay — plays on hover */}
          {product.videoUrl && (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            >
              <source src={product.videoUrl} type="video/mp4" />
            </video>
          )}

          {isPremium && (
            <div className="absolute top-4 right-4 inline-flex items-center gap-1 bg-sage-700 text-white px-3 py-1 rounded-full text-sm z-10">
              <Sparkles className="w-3 h-3" />
              Premium
            </div>
          )}

          {product.status && !loading && (
            <div className="absolute bottom-3 left-3 z-10 animate-fade-in">
              {isCuring ? (
                <span className="inline-flex items-center gap-1.5 bg-stone-900/70 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                  {cureUntil
                    ? T.card_curing_until(cureUntil)
                    : T.card_curing}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 bg-white/85 backdrop-blur-sm text-sage-800 px-2.5 py-1 rounded-full text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-600" />
                  {T.card_ready}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-xl text-stone-800">{name}</h3>
            {loading ? (
              <span className="inline-block w-24 h-5 rounded bg-stone-200 animate-pulse shrink-0 ml-2" />
            ) : (
              <span className="text-lg text-sage-700 shrink-0 ml-2 animate-fade-in">
                {price}
              </span>
            )}
          </div>
          {tagline && (
            <p
              className="text-sm text-stone-600 mb-3 leading-snug"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              {tagline}
            </p>
          )}

          {benefits && benefits.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {benefits.slice(0, 3).map((b, i) => (
                <span key={i} className="text-[10px] bg-stone-900/6 text-stone-700 px-2.5 py-1 rounded-full leading-none">
                  {b}
                </span>
              ))}
            </div>
          )}

          <ProfileMini profile={profile} />

          <div className="mt-4 flex items-center justify-end gap-1.5 text-sage-500 group-hover:text-sage-700 transition-colors duration-300">
            <span className="text-[10px] tracking-[0.15em] uppercase font-semibold">
              {T.card_details}
            </span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
