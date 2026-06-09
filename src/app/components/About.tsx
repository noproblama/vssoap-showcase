import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { SoapWaveBg } from "./DecorativeElements";
import { FadeIn } from "./FadeIn";
import { asset } from "../lib/asset";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";

// ── Increment to include a new creator_N.webp in public/
const CREATOR_COUNT = 8;
const creatorPhotos = Array.from({ length: CREATOR_COUNT }, (_, i) =>
  asset(`creator_${i + 1}.webp`),
);

// Clone 3 items on each side for seamless infinite looping
const CLONES = 3;
const extItems = [
  ...creatorPhotos.slice(-CLONES),
  ...creatorPhotos,
  ...creatorPhotos.slice(0, CLONES),
];
const TOTAL = extItems.length;
const COUNT = creatorPhotos.length;

function useVisibleCount() {
  const get = () => {
    if (typeof window === "undefined") return 3;
    if (window.matchMedia("(min-width: 1024px)").matches) return 3;
    if (window.matchMedia("(min-width: 640px)").matches) return 2;
    return 1;
  };
  const [count, setCount] = useState(get);
  useEffect(() => {
    const handler = () => setCount(get());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return count;
}

/* ─── Accordion item ─────────────────────────────────────────────────────── */
function AccordionItem({
  title,
  summary,
  children,
}: {
  title: string;
  summary: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-100 last:border-0">
      <button
        className="cursor-pointer w-full flex items-center justify-between gap-4 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <h3 className="text-2xl text-stone-800">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <p className="text-stone-600 leading-relaxed pb-3">{summary}</p>

      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="pb-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Infinite multi-visible carousel ────────────────────────────────────── */
function CreatorCarousel() {
  const visibleCount = useVisibleCount();
  const posRef = useRef(CLONES); // current index into extItems (always kept in sync)
  const [pos, setPos] = useState(CLONES);
  const [animate, setAnimate] = useState(true);

  const move = (dir: 1 | -1) => {
    const next = posRef.current + dir;
    posRef.current = next;
    setAnimate(true);
    setPos(next);
  };

  const handleTransitionEnd = () => {
    const cur = posRef.current;
    let next = cur;
    if (cur >= CLONES + COUNT) next = cur - COUNT;
    else if (cur < CLONES) next = cur + COUNT;

    if (next !== cur) {
      posRef.current = next;
      setAnimate(false);
      setPos(next);
      // Re-enable transition after the silent positional jump renders
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimate(true)),
      );
    }
  };

  const trackWidthPct = (TOTAL / visibleCount) * 100;
  const translateXPct = -(pos / TOTAL) * 100;

  return (
    <div className="pb-6 border-b border-stone-100">
      <div className="relative overflow-hidden rounded-xl">
        {/* Sliding track */}
        <div
          style={{
            display: "flex",
            width: `${trackWidthPct}%`,
            transform: `translateX(${translateXPct}%)`,
            transition: animate ? "transform 450ms ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extItems.map((src, i) => (
            <div
              key={i}
              style={{ width: `${100 / TOTAL}%` }}
              className="px-1.5"
            >
              <img
                src={src}
                alt={`Майстриня VS Soap`}
                className="w-full aspect-[3/4] object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <button
          onClick={() => move(-1)}
          className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors z-10"
          aria-label="Попереднє фото"
        >
          <ChevronLeft className="w-5 h-5 text-stone-700" />
        </button>
        <button
          onClick={() => move(1)}
          className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors z-10"
          aria-label="Наступне фото"
        >
          <ChevronRight className="w-5 h-5 text-stone-700" />
        </button>
      </div>
    </div>
  );
}

export function About() {
  const { lang } = useLang();
  const T = translations[lang];

  return (
    <section
      className="relative py-20 px-6 bg-[#F4F4F4] overflow-hidden"
      id="about"
    >
      <div className="absolute inset-x-0 -bottom-0 pointer-events-none h-[800px]">
        <SoapWaveBg />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <FadeIn>
          <span className="block text-center text-[10px] tracking-[0.25em] uppercase text-sage-600 font-semibold mb-3">
            {T.about_label}
          </span>
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-800">
            {T.about_h2}
          </h2>
          <p className="text-center text-stone-600 mb-12 text-lg">
            {T.about_subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="bg-white/90 rounded-2xl p-8 md:p-12 shadow-sm space-y-6">
            <CreatorCarousel />

            <AccordionItem
              title={T.about_acc1_title}
              summary={T.about_acc1_summary}
            >
              <p className="text-stone-600 leading-relaxed mb-3">{T.about_acc1_p1}</p>
              <p className="text-stone-600 leading-relaxed mb-3">{T.about_acc1_p2}</p>
              <p className="text-stone-600 leading-relaxed">{T.about_acc1_p3}</p>
            </AccordionItem>

            <AccordionItem
              title={T.about_acc2_title}
              summary={T.about_acc2_summary}
            >
              <p className="text-stone-600 leading-relaxed">{T.about_acc2_body}</p>
            </AccordionItem>

            <AccordionItem
              title={T.about_acc3_title}
              summary={T.about_acc3_summary}
            >
              <p className="text-stone-600 leading-relaxed mb-3">{T.about_acc3_p1}</p>
              <p className="text-stone-600 leading-relaxed">{T.about_acc3_p2}</p>
            </AccordionItem>

            <AccordionItem
              title={T.about_acc4_title}
              summary={T.about_acc4_summary}
            >
              <ul className="text-stone-600 leading-relaxed space-y-2 mb-5">
                {T.about_acc4_items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-600 leading-relaxed italic">{T.about_acc4_closing}</p>
            </AccordionItem>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
