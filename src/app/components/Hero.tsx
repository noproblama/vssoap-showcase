import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { asset } from "../lib/asset";

const navLinks = [
  { label: "Майстриня", href: "#founder" },
  { label: "Каталог", href: "#products" },
  { label: "Про майстерню", href: "#about" },
  { label: "Відгуки", href: "#testimonials" },
  { label: "Замовити", href: "#contact" },
];

function Navbar({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
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
        </div>

        {/* Mobile: hamburger button */}
        <button
          className={`flex md:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? "text-stone-700 hover:text-stone-900 hover:bg-white/40"
              : "text-white/90 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Меню"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
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
          {/* Gradient: transparent at top, solid at bottom behind text */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50/40 to-stone-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-50/70 via-stone-50/20 to-transparent" />
        </div>

        {/* Hero content — bottom-left */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16 pt-20 pb-14 md:pt-0 md:pb-32 max-w-2xl">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-1.5 rounded-full bg-white/55 backdrop-blur-sm border border-stone-200/70 text-stone-600 text-sm">
            Трави з Черкащини · Природні барвники · Натуральні ефірні олії
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-5 text-stone-800 leading-[1.05] tracking-tight">
            Створюю мило
            <br />
            із <em>власноруч</em>
            <br />
            зібраних трав
          </h1>

          {/* Tagline */}
          <p className="text-sm md:text-lg text-stone-600 mb-6 md:mb-10 font-light tracking-wide leading-relaxed">
            Холодне омилення. Витримка від 6 тижнів до 6 місяців. Турбота про
            Ваше здоровʼя та красу.
          </p>

          {/* CTA row */}
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
              <span className="relative z-10">Переглянути вироби</span>
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
              <span className="relative z-10">Як замовити</span>
            </a>
          </div>
        </div>

        {/* Scroll hint — centered at bottom */}
        <a
          href="#founder"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-3 group"
          aria-label="Гортати вниз"
        >
          <span className="text-[10px] tracking-[0.22em] uppercase text-stone-500/80 group-hover:text-stone-700 transition-colors">
            Гортайте
          </span>
          {/* Animated line: scaleY pulses from top, fades to transparent at bottom */}
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
