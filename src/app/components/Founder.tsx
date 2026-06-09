import { asset } from "../lib/asset";
import { FadeIn } from "./FadeIn";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";

export function Founder() {
  const { lang } = useLang();
  const T = translations[lang];

  return (
    <section
      id="founder"
      className="relative py-20 md:py-28 px-6 bg-stone-50 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 items-center">
        {/* Photo */}
        <FadeIn>
          <div className="relative">
            <img
              src={asset("founder.webp")}
              alt={T.founder_img_alt}
              className="w-full aspect-square object-cover rounded-full"
            />
            <div className="absolute -inset-3 rounded-full border border-sage-200 -z-10 pointer-events-none" />
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={180}>
          <div>
            <p className="text-stone-600 leading-relaxed mb-5">{T.founder_p1}</p>
            <p className="text-stone-600 leading-relaxed mb-5">{T.founder_p2}</p>
            <p className="text-stone-500 leading-relaxed">{T.founder_p3}</p>

            <div className="mt-10 flex items-center">
              <span className="italic text-sage-600 text-l">{T.founder_signature}</span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="h-px w-8 bg-sage-300 shrink-0" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-sage-600 font-semibold">
                {T.founder_title}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
