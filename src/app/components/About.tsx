import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { BotanicalPatternBg, SoapWaveBg } from "./DecorativeElements";
import { FadeIn } from "./FadeIn";
import { asset } from "../lib/asset";

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
  return (
    <section
      className="relative py-20 px-6 bg-[#F9F6F1] overflow-hidden"
      id="about"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] text-stone-600">
        <BotanicalPatternBg />
      </div>

      <div className="absolute inset-x-0 -bottom-0 pointer-events-none h-[800px]">
        <SoapWaveBg />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-800">
            Про майстерню
          </h2>
          <p className="text-center text-stone-600 mb-12 text-lg">
            Мистецтво, що зцілює шкіру та турбується про ваше здоров'я
          </p>
        </FadeIn>

        <FadeIn delay={120}>
        <div className="bg-white/90 rounded-2xl p-8 md:p-12 shadow-sm space-y-6">
          <CreatorCarousel />

          <AccordionItem
            title="Суть нашого ремесла"
            summary="Ми не «варимо» мило — ми створюємо його за автентичною технологією холодного омилення, зберігаючи всі живильні властивості олій."
          >
            <p className="text-stone-600 leading-relaxed mb-3">
              Це процес, де природа і хімія зустрічаються без поспіху. Ми
              поєднуємо рослинні олії та лужний розчин за кімнатної температури,
              щоб зберегти вітаміни і живильну молекулу, подаровану землею.
            </p>
            <p className="text-stone-600 leading-relaxed mb-3">
              Чому наш «холодний спосіб» — це магія? На відміну від
              промислового мила, ми не вилучаємо гліцерин. Він залишається
              всередині, створюючи на шкірі невидимий захисний бар'єр.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Олії (ши, какао, оливкова, кокосова, пальмова, мигдальна, жожоба,
              абрикосових кісточок, обліпихова та інші), мацерати (оливкова
              олія, настояна на травах та квітах), відвари трав та екстракти
              квітів не піддаються кип'ятінню — ваша шкіра отримує порцію
              доглядових олій, що не змилися в процесі реакції, та комплекс
              поживних речовин.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Витримка від 6 тижнів до 6 місяців"
            summary="Кожен брусок «дозріває» понад місяць у спеціальних умовах."
          >
            <p className="text-stone-600 leading-relaxed">
              За цей час він стає твердим, ніжним та безпечним — як витримане
              вино. Тільки після повного дозрівання мило потрапляє до вас.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Наші принципи — чистота у всьому"
            summary="Жодних промислових ПАРів (SLS), парабенів чи штучних піноутворювачів — тільки натуральне."
          >
            <p className="text-stone-600 leading-relaxed mb-3">
              Ми фарбуємо мило глинами, травами та спеціями. Аромат дарують
              лише 100% чисті ефірні олії, а не дешеві віддушки.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Ми дбаємо про планету так само, як про ваше тіло. Наше пакування
              — це папір, джут, натуральна деревина і жодного грама пластику.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Для кого ми створюємо?"
            summary="Для тих, хто стомився від хімії та хоче справжнього догляду — простого, чистого, природного."
          >
            <ul className="text-stone-600 leading-relaxed space-y-2 mb-5">
              <li className="flex gap-2">
                <span className="shrink-0">—</span>
                <span>стомився від відчуття стягнутості шкіри після душу;</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">—</span>
                <span>
                  має чутливу шкіру і розуміє, що справжнє зволоження
                  починається з дбайливого очищення без синтетичних ПАР;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">—</span>
                <span>
                  цінує естетику в деталях, перетворює звичайне миття рук на
                  маленький ритуал любові до себе і обирає свідоме споживання;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">—</span>
                <span>
                  читає склад раніше, ніж назву і обирає безпеку для своєї
                  шкіри та планети;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">—</span>
                <span>
                  прагне жити в гармонії з природою, відмовляючись від зайвої
                  хімії на користь чистих рослинних олій;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">—</span>
                <span>
                  цінує чесність складу: лише омилені олії, глини, трави,
                  ефірні екстракти — лише те, що дає природа;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">—</span>
                <span>бачить не просто форму, а відчуває душу;</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0">—</span>
                <span>
                  обирає справжнє замість штучного, цінує здоров'я своєї шкіри
                  та вірить, що розкіш криється у простоті та натуральності.
                </span>
              </li>
            </ul>
            <p className="text-stone-600 leading-relaxed italic">
              Наше творіння — це гігієна та ранковий ритуал любові до себе,
              втілений у шматочку шовковистої піни. Кожен брусок мила —
              унікальна композиція, новий спа досвід.
            </p>
          </AccordionItem>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
