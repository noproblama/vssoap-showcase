export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/src/imports/soap-lavender.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-sage-50/90 via-stone-50/85 to-stone-50/90"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-10 left-10 w-20 h-20 text-sage-200 opacity-60" viewBox="0 0 100 100">
          <path d="M50,10 Q60,30 50,50 Q40,30 50,10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="50" cy="10" r="3" fill="currentColor"/>
          <circle cx="45" cy="25" r="2" fill="currentColor"/>
          <circle cx="55" cy="25" r="2" fill="currentColor"/>
        </svg>

        <svg className="absolute top-40 right-20 w-16 h-16 text-sage-200 opacity-50" viewBox="0 0 100 100">
          <path d="M20,50 Q30,20 50,30 Q70,40 80,50" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </svg>

        <svg className="absolute bottom-20 left-1/4 w-24 h-24 text-sage-200 opacity-40" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <img
            src="/src/imports/image.png"
            alt="VS Soap Logo"
            className="h-24 md:h-32 w-auto object-contain drop-shadow-sm"
          />
        </div>
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
