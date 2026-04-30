import { BotanicalPatternBg, SoapWaveBg } from "./DecorativeElements";

export function About() {
  return (
    <section
      className="relative py-20 px-6 bg-[#F9F6F1] overflow-hidden"
      id="about"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] text-stone-600">
        <BotanicalPatternBg />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[1] text-stone-600">
        <SoapWaveBg />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto opacity-85">
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-stone-800">
          Про майстриню
        </h2>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Вітаю! Я створюю натуральне мило вже понад 5 років. Кожен брусок —
            це результат ретельного підбору інгредієнтів та любові до своєї
            справи.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Моя подорож у світ натуральної косметики почалася з бажання знайти
            альтернативу промисловому милу, яке пересушувало шкіру. Я вивчала
            старовинні рецепти, експериментувала з натуральними маслами та
            ефірними екстрактами.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            Сьогодні кожен брусок мого мила — це унікальна композиція, створена
            для догляду за вашою шкірою. Без консервантів, без синтетичних
            барвників, тільки те, що дала нам природа.
          </p>
        </div>
      </div>
    </section>
  );
}
