import { Snowflake, ShieldCheck, Sprout, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function WhyNatural() {
  const benefits: { title: string; description: string; Icon: LucideIcon }[] = [
    {
      title: "Холодне омилення",
      description:
        "Традиційна технологія виготовлення зберігає всі корисні властивості олій та екстрактів. Мило визріває 4-6 тижнів.",
      Icon: Snowflake,
    },
    {
      title: "Без хімії",
      description:
        "Ніяких SLS, парабенів, синтетичних барвників чи ароматизаторів. Тільки натуральні інгредієнти.",
      Icon: ShieldCheck,
    },
    {
      title: "Екологічно",
      description:
        "Біорозкладається повністю, не забруднює води. Упаковка з перероблених матеріалів.",
      Icon: Sprout,
    },
    {
      title: "Для здоров'я шкіри",
      description:
        "Зберігає природний ліпідний бар'єр шкіри, не пересушує, живить натуральним гліцерином.",
      Icon: Heart,
    },
  ];

  return (
    <section
      className="relative mt-[-1px] py-20 px-6 bg-[#A4AC86] overflow-hidden"
      id="why"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-800">
            Чому натуральна косметика?
          </h2>
          <p className="text-center text-stone-600 mb-16 text-lg max-w-3xl mx-auto">
            Наша шкіра — це живий орган, який потребує бережного догляду.
            Натуральне мило — це не просто засіб гігієни, а турбота про здоров'я.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 100}>
            <div
              className="bg-white/85 rounded-xl p-8 hover:shadow-lg transition-shadow flex gap-5 items-start h-full"
            >
              <div className="shrink-0 w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center">
                <benefit.Icon
                  className="w-7 h-7 text-sage-600"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-stone-800">
                  {benefit.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
