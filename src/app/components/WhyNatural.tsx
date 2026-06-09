import { Snowflake, ShieldCheck, Sprout, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";

const benefitIcons: LucideIcon[] = [Snowflake, ShieldCheck, Sprout, Heart];

export function WhyNatural() {
  const { lang } = useLang();
  const T = translations[lang];

  return (
    <section
      className="relative mt-[-1px] py-20 px-6 bg-[#A4AC86] overflow-hidden"
      id="why"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeIn>
          <span className="block text-center text-[10px] tracking-[0.25em] uppercase text-stone-700/60 font-semibold mb-3">
            {T.why_label}
          </span>
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-800">
            {T.why_h2}
          </h2>
          <p className="text-center text-stone-600 mb-16 text-lg max-w-3xl mx-auto">
            {T.why_subtitle}
          </p>
        </FadeIn>

        {/* Manifesto block */}
        <FadeIn delay={100}>
          <div className="bg-white/85 rounded-2xl p-8 md:p-10 mb-10">
            <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-7">
              {T.why_manifesto_intro}
            </p>
            <div className="space-y-6 mb-8">
              {T.why_manifesto_items.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-sage-600/15 text-sage-700 text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <span className="block text-stone-800 font-medium mb-1">{item.label}</span>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-stone-600 leading-relaxed mb-4 text-sm md:text-base">
              {T.why_manifesto_p}
            </p>
            <p
              className="text-stone-700 leading-relaxed text-sm md:text-base"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              {T.why_manifesto_italic}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {T.why_benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-white/85 rounded-xl p-8 hover:shadow-lg transition-shadow flex gap-5 items-start h-full">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <Icon className="w-7 h-7 text-sage-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2 text-stone-800">{benefit.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
