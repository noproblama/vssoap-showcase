import { DecorativeFlower, DecorativeWave, BotanicalRose, BotanicalLavender, BotanicalOlive } from './DecorativeElements';

export function Contact() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-stone-50 to-sage-50 overflow-hidden" id="contact">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <DecorativeWave className="absolute top-20 right-10 w-32 h-16" />
        <DecorativeFlower className="absolute bottom-40 left-10 w-24 h-24" />
      </div>
      {/* Botanical illustrations */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
        <BotanicalRose className="absolute -top-4 left-8 w-36 h-auto text-stone-700 -rotate-6" />
        <BotanicalOlive className="absolute -bottom-4 right-8 w-28 h-auto text-stone-700 rotate-6" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-8 text-stone-800">
          Як замовити
        </h2>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-12">
          <p className="text-lg text-stone-700 mb-8 leading-relaxed">
            Замовлення приймаю через соціальні мережі або за телефоном. Доставка по всій Україні Новою Поштою або Укрпоштою.
          </p>

          <div className="space-y-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-sage-600 text-white py-4 px-8 rounded-lg hover:bg-sage-700 transition-all text-lg shadow-sm"
            >
              📸 Instagram
            </a>

            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-sage-600 text-white py-4 px-8 rounded-lg hover:bg-sage-700 transition-all text-lg shadow-sm"
            >
              ✈️ Telegram
            </a>

            <a
              href="tel:+380000000000"
              className="block bg-sage-600 text-white py-4 px-8 rounded-lg hover:bg-sage-700 transition-all text-lg shadow-sm"
            >
              📞 +380 (00) 000-00-00
            </a>

            <a
              href="mailto:soap@example.com"
              className="block bg-sage-600 text-white py-4 px-8 rounded-lg hover:bg-sage-700 transition-all text-lg shadow-sm"
            >
              ✉️ soap@example.com
            </a>
          </div>
        </div>

        <p className="text-stone-600">
          Мінімальне замовлення — 2 бруски. При замовленні від 5 брусків — знижка 10%
        </p>
      </div>

      <footer className="mt-16 text-center">
        <div className="mb-4 flex justify-center">
          <img
            src="/src/imports/image.png"
            alt="VS Soap"
            className="h-16 w-auto object-contain opacity-70"
          />
        </div>
        <p className="text-stone-500">© 2026 VS Soap. Створено з любов'ю в Україні 🇺🇦</p>
      </footer>
    </section>
  );
}
