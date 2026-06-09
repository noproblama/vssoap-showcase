import { Hero } from './components/Hero';
import { Founder } from './components/Founder';
import { ProductGrid } from './components/ProductGrid';
import { Process } from './components/Process';
import { About } from './components/About';
import { WhyNatural } from './components/WhyNatural';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

function getSlugFromUrl(): string | null {
  return new URLSearchParams(window.location.search).get('product');
}

export default function App() {
  const initialSlug = getSlugFromUrl();

  return (
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
  );
}