export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-amber-50 to-stone-50 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl mb-6 text-stone-800">
          Натуральне мило
        </h1>
        <p className="text-2xl md:text-3xl text-stone-600 mb-8">
          Крафтове мило ручної роботи
        </p>
        <p className="text-lg text-stone-500 max-w-2xl mx-auto">
          Створене з любов'ю та турботою про вашу шкіру. Тільки натуральні інгредієнти, без хімії та консервантів.
        </p>
      </div>
    </section>
  );
}
