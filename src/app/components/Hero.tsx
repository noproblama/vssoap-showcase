import { BotanicalOlive, BotanicalLavender, BotanicalChamomile } from './DecorativeElements';

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
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/src/imports/soap-presentation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/60 via-stone-50/40 to-stone-50/65"></div>
      </div>

      {/* Botanical decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.14]">
        <BotanicalOlive className="absolute -top-4 left-8 w-36 h-auto text-stone-700" />
        <BotanicalLavender className="absolute -bottom-4 right-16 w-24 h-auto text-stone-700" />
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
