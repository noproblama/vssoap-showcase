import { Star, Quote } from "lucide-react";
import { BotanicalPatternBg } from "./DecorativeElements";
import { asset } from "../lib/asset";

const testimonials = [
  {
    name: "Олена К.",
    location: "Київ",
    text: "Замовила набір вперше — і вже третє замовлення! Шкіра стала м'якшою, більше не сушиться. Мило з трояндою — просто казка.",
    rating: 5,
    initials: "ОК",
    soapPhoto: asset("soap-rose-1.jpg"),
  },
  {
    name: "Марина Б.",
    location: "Львів",
    text: "Брала для дитини — мило для дітей справді ніжне, жодної алергії. Запах натуральний, ненав'язливий. Рекомендую всім мамам!",
    rating: 5,
    initials: "МБ",
    soapPhoto: asset("soap-children-1.jpg"),
  },
  {
    name: "Тетяна С.",
    location: "Харків",
    text: "Купила набір з 5 брусків зі знижкою. Подарувала подрузі — вона в захваті! Упаковка дуже гарна, виглядає як дорогий подарунок.",
    rating: 5,
    initials: "ТС",
    soapPhoto: asset("soap-sets-1.jpg"),
  },
  {
    name: "Ірина М.",
    location: "Одеса",
    text: "Нарешті знайшла мило без хімії, яке справді піниться добре. Лавандове — улюблене! Вже порадила всьому офісу.",
    rating: 5,
    initials: "ІМ",
    soapPhoto: asset("soap-lavender-2.jpg"),
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 relative opacity-75">
      <Quote className="absolute top-5 right-5 w-7 h-7 text-sage-200 opacity-60" />

      {/* Soap photo */}
      <div className="w-full h-40 rounded-xl overflow-hidden bg-stone-100">
        <img
          src={testimonial.soapPhoto}
          alt={`Мило, яке придбала ${testimonial.name}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* Stars */}
      <StarRating count={testimonial.rating} />

      {/* Review text */}
      <p className="text-stone-700 leading-relaxed text-sm flex-1">
        «{testimonial.text}»
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-stone-100">
        <div className="w-9 h-9 rounded-full bg-sage-100 flex items-center justify-center shrink-0">
          <span className="text-xs font-semibold text-sage-700">
            {testimonial.initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-800">
            {testimonial.name}
          </p>
          <p className="text-xs text-stone-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      className="relative py-20 px-6 bg-stone-100 overflow-hidden"
      id="testimonials"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] text-stone-600">
        <img
          src={asset("/floral-patttern-2.svg")}
          alt="floral pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl mb-4 text-stone-800">
            Що кажуть покупці
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Реальні враження від справжніх людей — без фільтрів і постановки
          </p>

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 mt-5 bg-stone-50 border border-stone-200 rounded-full px-5 py-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-stone-700 text-sm font-medium">
              4.9 · понад 80 замовлень
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Bottom trust signal */}
        <p className="text-center text-stone-400 text-sm mt-10">
          Усі відгуки — від реальних покупців. Фото мила надіслані замовниками
          особисто.
        </p>
      </div>
    </section>
  );
}
