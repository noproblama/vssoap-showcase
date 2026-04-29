import { DecorativeFlower, DecorativeLeaf } from './DecorativeElements';

export function WhyNatural() {
  const benefits = [
    {
      title: "Холодне омилення",
      description: "Традиційна технологія виготовлення зберігає всі корисні властивості олій та екстрактів. Мило визріває 4-6 тижнів."
    },
    {
      title: "Без хімії",
      description: "Ніяких SLS, парабенів, синтетичних барвників чи ароматизаторів. Тільки натуральні інгредієнти."
    },
    {
      title: "Екологічно",
      description: "Біорозкладається повністю, не забруднює води. Упаковка з перероблених матеріалів."
    },
    {
      title: "Для здоров'я шкіри",
      description: "Зберігає природний ліпідний бар'єр шкіри, не пересушує, живить натуральним гліцерином."
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden" id="why">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <DecorativeFlower className="absolute top-10 right-20 w-16 h-16" />
        <DecorativeLeaf className="absolute bottom-10 left-10 w-20 h-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-800">
          Чому натуральна косметика?
        </h2>
        <p className="text-center text-stone-600 mb-16 text-lg max-w-3xl mx-auto">
          Наша шкіра — це живий орган, який потребує бережного догляду. Натуральне мило — це не просто засіб гігієни, а турбота про здоров'я.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-stone-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl mb-4 text-stone-800">
                {benefit.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
