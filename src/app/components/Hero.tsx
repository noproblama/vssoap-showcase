import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { asset } from "../lib/asset";
import { useLang } from "../i18n/LangContext";
import { translations } from "../i18n/translations";

function LangSwitcher({ scrolled }: { scrolled: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex items-center rounded-full p-0.5 text-[11px] font-semibold tracking-wider transition-colors duration-300 ${
        scrolled
          ? "bg-stone-100 border border-stone-200"
          : "bg-white/10 border border-white/25 backdrop-blur-sm"
      }`}
    >
      {(["uk", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-label={l === "uk" ? "Українська" : "English"}
          className={`px-2.5 py-0.5 rounded-full transition-all duration-200 cursor-pointer ${
            lang === l
              ? scrolled
                ? "bg-stone-800 text-white shadow-sm"
                : "bg-white text-stone-800 shadow-sm"
              : scrolled
                ? "text-stone-500 hover:text-stone-700"
                : "text-white/65 hover:text-white"
          }`}
        >
          {l === "uk" ? "UA" : "EN"}
        </button>
      ))}
    </div>
  );
}

function Navbar({ scrolled }: { scrolled: boolean }) {
  const { lang } = useLang();
  const T = translations[lang];
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: T.nav_artisan, href: "#founder" },
    { label: T.nav_catalogue, href: "#products" },
    { label: T.nav_about, href: "#about" },
    { label: T.nav_reviews, href: "#testimonials" },
    { label: T.nav_order, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" aria-label={T.logo_aria} onClick={() => setMenuOpen(false)}>
          <img
            src={asset("VSsoap-logo.svg")}
            alt="VS Soap"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled
                ? "h-9 opacity-100"
                : "h-10 opacity-90 brightness-0 invert"
            }`}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:transition-[width] after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-stone-700 hover:text-stone-900 after:bg-stone-700"
                  : "text-white/90 hover:text-white drop-shadow-sm after:bg-white/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <LangSwitcher scrolled={scrolled} />
        </div>

        {/* Mobile: hamburger + lang */}
        <div className="flex md:hidden items-center gap-2">
          <LangSwitcher scrolled={scrolled} />
          <button
            className={`flex p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-stone-700 hover:text-stone-900 hover:bg-white/40"
                : "text-white/90 hover:text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={T.nav_menu_aria}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-stone-200/50 px-6 py-2 flex flex-col">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm text-stone-700 hover:text-stone-900 border-b border-stone-100 last:border-0 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export function Hero() {
  const { lang } = useLang();
  const T = translations[lang];
  const [scrolled, setScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.innerWidth < 768) {
      video.pause();
      video.currentTime = 0;
    }
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />

      <section className="relative h-dvh flex flex-col justify-end overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source src={asset("soap-presentation.mp4")} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50/40 to-stone-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-50/70 via-stone-50/20 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16 pt-20 pb-14 md:pt-0 md:pb-32 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-1.5 rounded-full bg-white/55 backdrop-blur-sm border border-stone-200/70 text-stone-600 text-sm">
            {T.hero_badge}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-5 text-stone-800 leading-[1.05] tracking-tight">
            {T.hero_h1_1}
            <br />
            {T.hero_h1_2} <em>{T.hero_h1_em}</em>
            <br />
            {T.hero_h1_3}
          </h1>

          <p className="text-sm md:text-lg text-stone-600 mb-6 md:mb-10 font-light tracking-wide leading-relaxed">
            {T.hero_tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-start">
            <a
              href="#products"
              className="relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 leading-none bg-sage-600 text-white rounded-full text-[11px] tracking-widest uppercase font-semibold shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <span
                className="absolute inset-y-0 left-0 w-[150%] translate-x-[-150%] group-hover:translate-x-0 transition-transform duration-500 ease-out"
                style={{
                  background:
                    "linear-gradient(to right, #414a39, #414a39 67%, transparent 100%)",
                }}
              />
              <span className="relative z-10">{T.hero_cta_browse}</span>
            </a>
            <a
              href="#contact"
              className="relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 leading-none bg-white/10 backdrop-blur-[3px] text-stone-800 rounded-full border border-white/40 text-[11px] tracking-widest uppercase font-semibold hover:text-white transition-colors duration-300 group"
            >
              <span
                className="absolute inset-y-0 left-0 w-[150%] translate-x-[-150%] group-hover:translate-x-0 transition-transform duration-500 ease-out"
                style={{
                  background:
                    "linear-gradient(to right, #4f5b45, #4f5b45 67%, transparent 100%)",
                }}
              />
              <span className="relative z-10">{T.hero_cta_order}</span>
            </a>
          </div>
        </div>

        <a
          href="#founder"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-3 group"
          aria-label={T.hero_scroll_aria}
        >
          <span className="text-[10px] tracking-[0.22em] uppercase text-stone-500/80 group-hover:text-stone-700 transition-colors">
            {T.hero_scroll}
          </span>
          <span
            className="block w-px h-12 origin-top animate-scroll-hint"
            style={{
              background:
                "linear-gradient(to bottom, rgb(120 113 108 / 0.75), transparent)",
            }}
          />
        </a>
      </section>
    </>
  );
}
