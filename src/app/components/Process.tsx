import { asset } from "../lib/asset";
import { FadeIn } from "./FadeIn";
import { BotanicalPatternBg } from "./DecorativeElements";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";

const stepMedia = [
  asset("process-prepare.mp4"),
  asset("process-mix.mp4"),
  asset("process-cut.mp4"),
  asset("process-cure.mp4"),
];

function StepMedia({ src, title }: { src: string; title: string }) {
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

  if (isVideo) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.currentTarget as HTMLVideoElement).style.display = "none";
          e.currentTarget.nextElementSibling?.classList.remove("hidden");
        }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={title}
      className="w-full h-full object-cover"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
        e.currentTarget.nextElementSibling?.classList.remove("hidden");
      }}
    />
  );
}

export function Process() {
  const { lang } = useLang();
  const T = translations[lang];
  const steps = T.process_steps.map((s, i) => ({ ...s, media: stepMedia[i] }));

  return (
    <section
      className="relative py-20 md:py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #F2E9D8, #F4F4F4)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] text-stone-600"
        style={{
          maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
        }}
      >
        <BotanicalPatternBg />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeIn>
          <span className="block text-center text-[10px] tracking-[0.25em] uppercase text-sage-600 font-semibold mb-4">
            {T.process_label}
          </span>
          <h2 className="text-4xl md:text-5xl text-center mb-5 text-stone-800 leading-tight">
            {T.process_h2_1}<br className="hidden sm:block" /> {T.process_h2_2}
          </h2>
          <p className="text-center text-stone-500 mb-16 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {T.process_subtitle}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="flex flex-col">
                {/* Media block */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-stone-200 mb-4">
                  <StepMedia src={s.media} title={s.title} />
                  {/* Fallback placeholder (shown if media fails) */}
                  <div className="hidden absolute inset-0 flex items-end justify-center pb-6 bg-gradient-to-br from-stone-200 to-stone-300">
                    <span className="text-stone-400 text-sm italic">
                      {s.title}
                    </span>
                  </div>
                  {/* Step label */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-stone-900/65 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase font-medium">
                      {s.step} · {s.time}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <h3
                  className="text-xl text-stone-800 mb-2 leading-snug"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                  }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
