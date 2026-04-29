import { DecorativeCircles, DecorativeWave } from './DecorativeElements';

export function About() {
  return (
    <section className="relative py-20 px-6 bg-stone-50 overflow-hidden" id="about">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <DecorativeCircles className="absolute top-20 right-10 w-24 h-24" />
        <DecorativeWave className="absolute bottom-20 left-0 w-48 h-24" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-stone-800">
          Про майстриню
        </h2>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Вітаю! Я створюю натуральне мило вже понад 5 років. Кожен брусок — це результат ретельного підбору інгредієнтів та любові до своєї справи.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Моя подорож у світ натуральної косметики почалася з бажання знайти альтернативу промисловому милу, яке пересушувало шкіру. Я вивчала старовинні рецепти, експериментувала з натуральними маслами та ефірними екстрактами.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            Сьогодні кожен брусок мого мила — це унікальна композиція, створена для догляду за вашою шкірою. Без консервантів, без синтетичних барвників, тільки те, що дала нам природа.
          </p>
        </div>
      </div>
    </section>
  );
}
