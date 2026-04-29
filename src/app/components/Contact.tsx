export function Contact() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-amber-50" id="contact">
      <div className="max-w-4xl mx-auto text-center">
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
              className="block bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 px-8 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all text-lg"
            >
              📸 Instagram
            </a>

            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all text-lg"
            >
              ✈️ Telegram
            </a>

            <a
              href="tel:+380000000000"
              className="block bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-lg hover:from-green-600 hover:to-green-700 transition-all text-lg"
            >
              📞 +380 (00) 000-00-00
            </a>

            <a
              href="mailto:soap@example.com"
              className="block bg-gradient-to-r from-stone-500 to-stone-600 text-white py-4 px-8 rounded-lg hover:from-stone-600 hover:to-stone-700 transition-all text-lg"
            >
              ✉️ soap@example.com
            </a>
          </div>
        </div>

        <p className="text-stone-600">
          Мінімальне замовлення — 2 бруски. При замовленні від 5 брусків — знижка 10%
        </p>
      </div>

      <footer className="mt-16 text-center text-stone-500">
        <p>© 2026 Натуральне мило ручної роботи. Створено з любов'ю в Україні 🇺🇦</p>
      </footer>
    </section>
  );
}
