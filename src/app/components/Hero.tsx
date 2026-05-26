import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { asset } from "../lib/asset";
import { BotanicalWaveTransition } from "./DecorativeElements";

const navLinks = [
  { label: "Каталог", href: "#products" },
  { label: "Про нас", href: "#about" },
  { label: "Чому натуральне", href: "#why" },
  { label: "Відгуки", href: "#testimonials" },
  { label: "Замовити", href: "#contact" },
];

function Navbar({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/40 backdrop-blur-md${scrolled ? " shadow-sm" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          aria-label="VS Soap — на початок"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={asset("VSsoap-logo.svg")}
            alt="VS Soap"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-9 opacity-100" : "h-10 opacity-90"
            }`}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide transition-colors duration-200 text-stone-700 hover:text-stone-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile: hamburger button */}
        <button
          className="flex md:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-white/40 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Меню"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/85 backdrop-blur-md border-t border-stone-200/50 px-6 py-2 flex flex-col">
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16">
        {/* Video background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source src={asset("soap-presentation.mp4")} type="video/mp4" />
          </video>
          {/* Gradient: subtle at center, stronger at edges so text pops */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/55 via-stone-50/25 to-stone-100/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-50/30 via-transparent to-stone-50/30" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <BotanicalWaveTransition />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/55 backdrop-blur-sm border border-stone-200/70 text-stone-600 text-sm">
            Натуральні олії, трави та квіти Черкащини · лише природні барвники · 100% ефірні олії
          </div>

          {/* Main heading — italic Cormorant Garamond for romance */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl mb-5 text-stone-800 italic leading-none tracking-tight">
            Крафтове
            <br />
            мило
          </h1>

          {/* Tagline — body font, light weight */}
          <p className="text-lg md:text-xl text-stone-600 mb-10 font-light tracking-widest uppercase">
            Натуральне · Ручної роботи · З турботою про ваше здоровʼя
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#products"
              className="px-8 py-3.5 bg-stone-800 text-white rounded-lg hover:bg-stone-700 active:bg-stone-900 transition-all text-sm tracking-wide shadow-md hover:shadow-lg"
            >
              Переглянути вироби
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 bg-white/65 backdrop-blur-sm text-stone-800 rounded-lg border border-stone-300/80 hover:bg-white/85 transition-all text-sm tracking-wide"
            >
              Як замовити
            </a>
          </div>
        </div>

        {/* Scroll cue — hidden on mobile so it doesn't overlap CTAs */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-stone-500 animate-bounce">
          <a
            href="#products"
            className="text-xs tracking-widest uppercase opacity-70"
          >
            Гортати
          </a>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>
    </>
  );
}
