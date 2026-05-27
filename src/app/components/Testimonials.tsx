import { useState, useEffect } from "react";
import { Play, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { FadeIn } from "./FadeIn";

function QuoteMark() {
  return (
    <span className="text-4xl leading-none text-stone-200 font-serif select-none">
      "
    </span>
  );
}
import { BotanicalPatternBg } from "./DecorativeElements";
import { asset } from "../lib/asset";

const testimonials = [
  {
    name: "Миролада",
    text: "Це дійсно живі мила, в яких відчувається енергія і сила! Всі композиції підібрані так, що вони працюють під різні запити. Найголовніше — шкіра після використання не стягнена, не суха, а шовковиста, ніжна, жива. Відчула вплив не лише фізично — і на психічний, і на ментальний стан. Сміливо рекомендую!",
    rating: 5,
    photo: asset("review_1.webp"),
    videoUrl: asset("review_1.mp4"),
  },
  {
    name: "Ольга К.",
    text: "Подарунковий набір із 10 видів мила у вʼязаній корзинці ручної роботи — все дуже гарно, класна корзинка. Подарунок — супер!",
    rating: 5,
    photo: asset("review_2.webp"),
    videoUrl: asset("review_2.mp4"),
  },
  {
    name: "Торі М.",
    text: "Дуже дякую за ваше крафтове милко 💗\n\n🔥 Мило не сушить шкіру. В мене чутлива шкіра, від мила з магазину я вся чухаюсь, шкіра стягується так, що наче зараз потріскається. Після Лавандового та Огіркового — повністю комфортно! Для інтимної гігієни теж підійшло, що дивовижно!\n\n💚 Аромат приємний, ненав'язливий, природній — не залишається на шкірі, що говорить про відсутність хімічних закріплювачів і добавок.\n\nЯ створюю натуральні креми, розбираюсь у складі — і тепер буду обирати ваше мило. Закупилась на півроку 🥰",
    rating: 5,
    photo: asset("review_3.webp"),
    videoUrl: asset("review_3.mp4"),
  },
];

// ── To add more social review images: increment this number and drop the file
// in public/ following the naming pattern review_social_N.webp
const SOCIAL_REVIEW_COUNT = 5;
const socialReviewPhotos = Array.from({ length: SOCIAL_REVIEW_COUNT }, (_, i) =>
  asset(`review_social_${i + 1}.webp`),
);

/* ─── Video modal ─────────────────────────────────────────────────────────── */
function VideoModal({
  url,
  name,
  text,
  onClose,
}: {
  url: string;
  name?: string;
  text?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative flex flex-row items-end"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-10 right-0 flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-sm"
          onClick={onClose}
          aria-label="Закрити відео"
        >
          <X className="w-5 h-5" />
          <span>Закрити</span>
        </button>

        {/* Video */}
        <div className="rounded-2xl md:rounded-r-none overflow-hidden shadow-2xl shrink-0">
          <video
            src={url}
            controls
            autoPlay
            playsInline
            className="block bg-black max-h-[85vh] max-w-[90vw] md:max-w-none w-auto"
          />
        </div>

        {/* Text panel — desktop only, Instagram-style */}
        {name && text && (
          <div className="hidden md:flex flex-col bg-white rounded-r-2xl shadow-2xl w-72 self-stretch overflow-y-auto">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-stone-100 shrink-0">
              <div className="w-9 h-9 rounded-full bg-sage-100 flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold text-sage-700">
                  {name.charAt(0)}
                </span>
              </div>
              <p className="font-semibold text-stone-800 text-sm">{name}</p>
            </div>
            <div className="px-5 py-4 flex-1">
              {text.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-stone-600 text-sm leading-relaxed mb-3 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Social photo lightbox modal ─────────────────────────────────────────── */
function SocialModal({
  startIndex,
  onClose,
}: {
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const count = socialReviewPhotos.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close — viewport-anchored top-right */}
      <button
        className="cursor-pointer absolute top-4 right-4 z-10 flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-sm"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Закрити"
      >
        <X className="w-5 h-5" />
        <span>Закрити</span>
      </button>

      {/* Prev — viewport-anchored left */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow"
        aria-label="Попередній відгук"
      >
        <ChevronLeft className="w-6 h-6 text-stone-700" />
      </button>

      {/* Image — centered, leaves room for buttons on both sides */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={socialReviewPhotos[index]}
          alt={`Відгук у соцмережах ${index + 1}`}
          className="block max-h-[85vh] max-w-[calc(100vw-8rem)] w-auto object-contain bg-stone-900"
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
          {index + 1} / {count}
        </div>
      </div>

      {/* Next — viewport-anchored right */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow"
        aria-label="Наступний відгук"
      >
        <ChevronRight className="w-6 h-6 text-stone-700" />
      </button>
    </div>
  );
}

/* ─── Social review card ──────────────────────────────────────────────────── */
function SocialReviewCard({ onOpen }: { onOpen: (index: number) => void }) {
  const [index, setIndex] = useState(0);
  const count = socialReviewPhotos.length;
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + count) % count);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % count);
  };

  return (
    <div className="bg-transparent rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
      {/* Image carousel — square to match social screenshot proportions */}
      <div
        className="relative w-full aspect-square overflow-hidden rounded-t-2xl bg-stone-100 cursor-zoom-in group"
        onClick={() => onOpen(index)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onOpen(index)}
        aria-label="Відкрити відгуки у соцмережах"
      >
        {socialReviewPhotos.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Відгук у соцмережах ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ))}

        {/* Zoom hint overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <ZoomIn className="w-5 h-5 text-stone-800" />
          </div>
        </div>

        <button
          onClick={prev}
          className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors z-10"
          aria-label="Попередній відгук"
        >
          <ChevronLeft className="w-4 h-4 text-stone-700" />
        </button>
        <button
          onClick={next}
          className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors z-10"
          aria-label="Наступний відгук"
        >
          <ChevronRight className="w-4 h-4 text-stone-700" />
        </button>

        <div className="absolute bottom-3 right-3 bg-black/45 backdrop-blur-sm rounded-full px-2.5 py-1 text-white text-xs z-10">
          {index + 1} / {count}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white/85 p-5 flex flex-col gap-3 flex-1">
        <QuoteMark />

        <p className="text-stone-700 text-sm leading-relaxed">
          Відгуки наших покупців у переписках та соцмережах.
        </p>

        <div className="flex items-center gap-2.5 pt-2.5 border-t border-stone-100 mt-auto">
          <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center shrink-0">
            <span className="text-xs font-semibold text-sage-700">♡</span>
          </div>
          <p className="text-sm font-semibold text-stone-800">Пряма мова</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Video review card ───────────────────────────────────────────────────── */
function TestimonialCard({
  testimonial,
  onPlay,
}: {
  testimonial: (typeof testimonials)[number];
  onPlay: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = testimonial.text.split("\n\n");
  const isLong = paragraphs.length > 2;
  const shown = expanded ? paragraphs : paragraphs.slice(0, 2);

  return (
    <div className="bg-transparent rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
      {/* Thumbnail + play overlay */}
      <div
        className="relative w-full h-52 overflow-hidden rounded-t-2xl bg-stone-100 cursor-pointer group"
        onClick={onPlay}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onPlay()}
        aria-label={`Переглянути відео від ${testimonial.name}`}
      >
        <img
          src={testimonial.photo}
          alt={`Відгук від ${testimonial.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors duration-300">
          <div className="w-14 h-14 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 text-stone-800 ml-1" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/45 backdrop-blur-sm rounded-full px-2.5 py-1">
          <Play className="w-3 h-3 text-white" fill="white" />
          <span className="text-white text-xs tracking-wide">Відео</span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white/85 p-5 flex flex-col gap-3 flex-1">
        <QuoteMark />

        <div className="flex flex-col gap-2">
          {shown.map((para, i) => (
            <p key={i} className="text-stone-700 text-sm leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {isLong && (
          <button
            className="text-xs text-sage-600 hover:text-sage-800 transition-colors text-left"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Згорнути ▲" : "Читати далі ▼"}
          </button>
        )}

        <div className="flex items-center gap-2.5 pt-2.5 border-t border-stone-100 mt-auto">
          <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center shrink-0">
            <span className="text-xs font-semibold text-sage-700">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <p className="text-sm font-semibold text-stone-800">
            {testimonial.name}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main section ────────────────────────────────────────────────────────── */
export function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    name: string;
    text: string;
  } | null>(null);
  const [activeSocial, setActiveSocial] = useState<number | null>(null);

  return (
    <section
      className="relative py-20 px-6 bg-stone-100 overflow-hidden"
      id="testimonials"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] text-stone-600">
        <BotanicalPatternBg />
      </div>

      {/* Header — stays centered */}
      <FadeIn className="relative z-10 max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl mb-4 text-stone-800">
          Що кажуть покупці
        </h2>
        <p className="text-stone-500 text-lg max-w-2xl mx-auto">
          Реальні враження від справжніх людей
        </p>
      </FadeIn>

      {/* Review cards — full width, 1 on mobile, 2 on tablet, 4 on desktop */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 100}>
            <TestimonialCard
              testimonial={t}
              onPlay={() =>
                setActiveVideo({ url: t.videoUrl, name: t.name, text: t.text })
              }
            />
          </FadeIn>
        ))}
        <FadeIn delay={testimonials.length * 100}>
          <SocialReviewCard onOpen={(i) => setActiveSocial(i)} />
        </FadeIn>
      </div>

      <p className="relative z-10 text-center text-stone-400 text-sm mt-8">
        Усі відгуки — від реальних покупців. Фото та відео надіслані замовниками
        особисто.
      </p>

      {/* Video modal */}
      {activeVideo && (
        <VideoModal
          url={activeVideo.url}
          name={activeVideo.name}
          text={activeVideo.text}
          onClose={() => setActiveVideo(null)}
        />
      )}

      {/* Social photo lightbox */}
      {activeSocial !== null && (
        <SocialModal
          startIndex={activeSocial}
          onClose={() => setActiveSocial(null)}
        />
      )}
    </section>
  );
}
