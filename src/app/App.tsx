import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { About } from './components/About';
import { WhyNatural } from './components/WhyNatural';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-100">
      <Hero />
      <ProductGrid />
      <About />
      <WhyNatural />
      <Testimonials />
      <Contact />
    </div>
  );
}