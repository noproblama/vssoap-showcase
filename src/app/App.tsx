import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Founder } from './components/Founder';
import { ProductGrid } from './components/ProductGrid';
import { Process } from './components/Process';
import { About } from './components/About';
import { WhyNatural } from './components/WhyNatural';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { LangProvider, useLang, type Lang } from './i18n/LangContext';

const META = {
  uk: {
    title: 'VS Soap — Натуральне крафтове мило ручної роботи',
    description: 'Крафтове мило ручної роботи з трав Черкащини. Холодне омилення, витримка від 6 тижнів, 100% натуральні інгредієнти. Без SLS та парабенів.',
  },
  en: {
    title: 'VS Soap — Natural Handmade Craft Soap',
    description: 'Handmade cold-process soap from the herbs of Cherkasy region, Ukraine. Cured 6 weeks to 6 months. No SLS, no parabens, 100% natural ingredients.',
  },
} as const;

function MetaUpdater() {
  const { lang } = useLang();
  useEffect(() => {
    const { title, description } = META[lang];
    document.title = title;
    document.documentElement.lang = lang === 'en' ? 'en' : 'uk';
    const metaDesc = document.querySelector('meta[name="description"]');
    metaDesc?.setAttribute('content', description);
  }, [lang]);
  return null;
}

function getSlugFromUrl(): string | null {
  return new URLSearchParams(window.location.search).get('product');
}

function getLangFromUrl(): Lang {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'en') return 'en';
  if (urlLang === 'uk' || urlLang === 'ua') return 'uk';
  // No URL override — use browser preference
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'uk';
}

export default function App() {
  const initialSlug = getSlugFromUrl();
  const initialLang = getLangFromUrl();

  return (
    <LangProvider initial={initialLang}>
      <MetaUpdater />
      <div className="min-h-screen bg-stone-100">
        <Hero />
        <Founder />
        <ProductGrid initialSlug={initialSlug} />
        <Process />
        <About />
        <WhyNatural />
        <Testimonials />
        <Contact />
      </div>
    </LangProvider>
  );
}