import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { BotanicalPatternBg } from "./DecorativeElements";
import { asset } from "../lib/asset";

const products = [
  {
    id: 1,
    name: "Дитяче",
    category: "premium",
    price: "180 грн",
    description:
      "Найніжніше мило для малюків. Гіпоалергенне, з натуральними маслами.",
    detailedDescription:
      "Спеціально розроблене для ніжної дитячої шкіри. Не містить жодних агресивних компонентів, барвників чи синтетичних ароматів. Ідеально підходить для щоденного купання немовлят та дітей віком до 3 років. М'яко очищає, не пересушує шкіру.",
    image: asset("soap-children-1.jpg"),
    additionalImages: [asset("soap-children-2.jpg")],
    videoUrl: asset("soap-children.mp4"),
    ingredients: [
      "Оливкова олія холодного віджиму",
      "Кокосова олія",
      "Масло ши (карите)",
      "Рицинова олія",
      "Дистильована вода",
      "Гідроксид натрію (повністю нейтралізується)",
    ],
    benefits: [
      "Гіпоалергенне",
      "Без ароматизаторів та барвників",
      "М'яко очищає ніжну шкіру",
      "Підтримує природний pH баланс",
      "Протестовано дерматологами",
    ],
  },
  {
    id: 2,
    name: "Алеппське",
    category: "premium",
    price: "220 грн",
    description: "Традиційне сирійське мило з лавровим та оливковим маслами.",
    detailedDescription:
      "Виготовлене за старовинним сирійським рецептом, що налічує понад 2000 років історії. Мило вислужується мінімум 9 місяців, що робить його особливо м'яким та ефективним. Чим довше зберігається - тім краще стає. Ідеально для чутливої та проблемної шкіри.",
    image: asset("soap-aleppo-2.jpg"),
    additionalImages: [asset("soap-aleppo-3.jpg")],
    videoUrl: asset("soap-aleppo.mp4"),
    ingredients: [
      "Оливкова олія Extra Virgin (80%)",
      "Лаврова олія (20%)",
      "Дистильована вода",
      "Гідроксид натрію",
    ],
    benefits: [
      "Підходить для проблемної шкіри",
      "Природні антисептичні властивості",
      "Допомагає при екземі та псоріазі",
      "Покращує стан шкіри голови",
      "Може використовуватись для гоління",
    ],
  },
  {
    id: 3,
    name: "Екзотичне",
    category: "regular",
    price: "150 грн",
    description: "З екзотичними оліями та ароматами. Живить та зволожує шкіру.",
    detailedDescription:
      "Розкішна композиція екзотичних олій, що транспортує вас до тропічного раю. Глибоко живить шкіру, залишаючи її оксамитово-м'якою. Ідеально для сухої та нормальної шкіри.",
    image: asset("soap-exotic-2.jpg"),
    additionalImages: [asset("soap-exotic-3.jpg")],
    videoUrl: asset("soap-exotic.mp4"),
    ingredients: [
      "Кокосова олія",
      "Олія макадамії",
      "Олія авокадо",
      "Масло какао",
      "Екстракт ванілі",
      "Ефірна олія іланг-іланг",
    ],
    benefits: [
      "Інтенсивне зволоження",
      "Пом'якшує огрубілу шкіру",
      "Тропічний аромат",
      "Підходить для масажу",
    ],
  },
  {
    id: 4,
    name: "Лавандове",
    category: "regular",
    price: "145 грн",
    description: "Заспокоює та розслабляє. З натуральною олією лаванди.",
    detailedDescription:
      "Мило з цілющими властивостями лаванди, яка вирощена в екологічно чистих районах. Ідеально підходить для вечірнього душу - заспокоює нервову систему та готує до здорового сну. Природний антисептик.",
    image: asset("soap-lavender-2.jpg"),
    additionalImages: [asset("soap-lavender-3.jpg")],
    videoUrl: asset("soap-lavender.mp4"),
    ingredients: [
      "Оливкова олія",
      "Кокосова олія",
      "Пальмова олія",
      "Ефірна олія лаванди",
      "Сухі квіти лаванди",
      "Каолінова глина",
    ],
    benefits: [
      "Заспокоює подразнену шкіру",
      "Розслабляючий ефект",
      "Природний антисептик",
      "Допомагає при безсонні",
      "М'яке очищення пір",
    ],
  },
  {
    id: 5,
    name: "Медове",
    category: "regular",
    price: "155 грн",
    description:
      "З натуральним медом та прополісом. Живить та відновлює шкіру.",
    detailedDescription:
      "Збагачене натуральним медом та прополісом від українських бджолярів. Мед — природний антиоксидант, що живить та відновлює шкіру. Прополіс має антибактеріальні властивості. Ідеально для осіннього та зимового періоду.",
    image: asset("soap-honey-2.jpg"),
    additionalImages: [asset("soap-honey-3.jpg")],
    videoUrl: asset("soap-honey.mp4"),
    ingredients: [
      "Натуральний мед",
      "Прополіс",
      "Оливкова олія",
      "Молоко козине (опціонально)",
      "Воск бджолиний",
      "Ефірна олія апельсина",
    ],
    benefits: [
      "Живить та відновлює шкіру",
      "Антиоксидантний ефект",
      "Природний антисептик",
      "Покращує еластичність шкіру",
      "Приємний медовий аромат",
    ],
  },
  {
    id: 6,
    name: "Полин-шавлія-пижмо",
    category: "regular",
    price: "140 грн",
    description: "Трав'яний букет для глибокого очищення.",
    detailedDescription:
      "Потужна трав'яна композиція з українських луків. Ці рослини відомі своїми очищувальними та антисептичними властивостями. Ідеально підходить для проблемної та жирної шкіри. Особливо рекомендується влітку.",
    image: asset("soap-wormwood-sage-tansy-1.jpg"),
    additionalImages: [asset("soap-wormwood-sage-tansy-3.jpg")],
    videoUrl: asset("soap-wormwood-sage-tansy.mp4"),
    ingredients: [
      "Відвар полину",
      "Відвар шавлії",
      "Відвар пижма",
      "Оливкова олія",
      "Кокосова олія",
      "Зелена глина",
    ],
    benefits: [
      "Ідеально для жирної шкіри",
      "Природний антисептик",
      "Звужує пори",
      "Бореться з акне",
      "Тонізує та освіжає",
    ],
  },
  {
    id: 7,
    name: "Сольове",
    category: "regular",
    price: "135 грн",
    description: "З морською сіллю та мінералами. Пілінг та детокс.",
    detailedDescription:
      "Збагачене морською сіллю з Мертвого моря. Чудовий природний скраб, що м'яко відлущує мертві клітини шкіри. Мінерали в складі солі живлять та тонізують шкіру. Детокс-ефект для всього тіла.",
    image: asset("soap-salty-1.jpg"),
    additionalImages: [asset("soap-salty-2.jpg")],
    ingredients: [
      "Морська сіль (Мертве море)",
      "Гімалайська рожева сіль",
      "Кокосова олія",
      "Олія жожоба",
      "Ефірна олія м'яти",
      "Ефірна олія евкаліпта",
    ],
    benefits: [
      "М'який пілінг",
      "Детокс ефект",
      "Покращує кровообіг",
      "Збагачує мінералами",
      "Тонізує та освіжає",
    ],
  },
  {
    id: 8,
    name: "Трояндове",
    category: "regular",
    price: "165 грн",
    description: "Ніжний аромат троянди. Зволожує та тонізує.",
    detailedDescription:
      "Створене з екстрактом троянди та пелюстками троянди. Розкішний квітковий аромат дарує відчуття SPA-процедури вдома. Підходить для всіх типів шкіри, особливо для сухої та зрілої.",
    image: asset("soap-rose-1.jpg"),
    additionalImages: [asset("soap-rose-3.jpg")],
    videoUrl: asset("soap-rose.mp4"),
    ingredients: [
      "Трояндова вода",
      "Пелюстки троянди",
      "Рожева глина",
      "Олія шипшини",
      "Олія жожоба",
      "Ефірна олія герані",
    ],
    benefits: [
      "Інтенсивне зволоження",
      "Антивікові властивості",
      "Тонізує шкіру",
      "Розкішний аромат",
      "Підходить для зрілої шкіри",
    ],
  },
  {
    id: 9,
    name: "Квіткове",
    category: "regular",
    price: "145 грн",
    description: "Букет квіткових екстрактів. Делікатний догляд.",
    detailedDescription:
      "Ніжна композиція з екстрактів польових та садових квітів. М'який догляд для чутливої шкіри. Делікатний квітковий аромат супроводжує вас протягом дня. Підходить для щоденного використання.",
    image: asset("soap-floral-1.jpg"),
    additionalImages: [asset("soap-floral-3.jpg")],
    videoUrl: asset("soap-floral.mp4"),
    ingredients: [
      "Екстракт ромашки",
      "Екстракт календули",
      "Екстракт волошки",
      "Олія солодкого мигдалю",
      "Кокосова олія",
      "Натуральний ароматичний букет",
    ],
    benefits: [
      "Для чутливої шкіри",
      "М'яке очищення",
      "Заспокоює подразнення",
      "Ніжний квітковий аромат",
      "Підходить для щоденного використання",
    ],
  },
  {
    id: 10,
    name: "Полуничне (з подорожником)",
    category: "regular",
    price: "150 грн",
    description: "Солодкий аромат полуниці та цілющі властивості подорожника.",
    detailedDescription:
      "Унікальна комбінація насіння полуниці та екстракту подорожника. Полуничні зернятка створюють м'який пілінг-ефект, а подорожник відомий своїми ранозагоювальними властивостями. Ідеально для літнього сезону.",
    image: asset("soap-strawberry-1.jpg"),
    additionalImages: [asset("soap-strawberry-2.jpg")],
    videoUrl: asset("soap-strawberry.mp4"),
    ingredients: [
      "Насіння полуниці",
      "Екстракт подорожника",
      "Натуральний полуничний ароматизатор",
      "Оливкова олія",
      "Кокосова олія",
      "Рожева глина",
    ],
    benefits: [
      "М'який пілінг",
      "Ранозагоювальні властивості",
      "Солодкий фруктовий аромат",
      "Освіжає шкіру",
      "Підходить для юної шкіри",
    ],
  },
  {
    id: 11,
    name: "Набори",
    category: "sets",
    price: "від 350 грн",
    description: "Дегустаційні набори або подарункові комплекти.",
    detailedDescription:
      "Спеціально підібрані комбінації нашого мила у красивій екологічній упаковці. Ідеальний подарунок для близьких. Доступні дегустаційні набори (міні-бруски 4-6 видів) та повноцінні подарункові комплекти. Можливість індивідуального підбору складу набору.",
    image: asset("soap-sets-1.jpg"),
    additionalImages: [
      asset("soap-sets-3.jpg"),
      asset("soap-sets-9.jpg"),
      asset("soap-sets-10.jpg"),
      asset("soap-sets-11.jpg"),
    ],
    benefits: [
      "Готовий подарунок",
      "Красива упаковка",
      "Можливість спробувати різні види",
      "Економія до 15% порівняно з поштучною купівлею",
      "Індивідуальний підбір складу",
    ],
  },
];

export function ProductGrid() {
  const [selectedProductIndex, setSelectedProductIndex] = useState<
    number | null
  >(null);

  const handleOpenModal = (index: number) => {
    setSelectedProductIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedProductIndex(null);
  };

  const handleNext = () => {
    if (selectedProductIndex !== null) {
      setSelectedProductIndex((selectedProductIndex + 1) % products.length);
    }
  };

  const handlePrevious = () => {
    if (selectedProductIndex !== null) {
      setSelectedProductIndex(
        (selectedProductIndex - 1 + products.length) % products.length,
      );
    }
  };

  return (
    <section
      className="relative py-20 px-6 bg-[#F9F6F1] overflow-hidden"
      id="products"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] text-stone-600">
        <BotanicalPatternBg />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-800">
          Наші вироби
        </h2>
        <p className="text-center text-stone-600 mb-16 text-lg">
          Кожен брусок створений з натуральних інгредієнтів
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleOpenModal(index)}
            />
          ))}
        </div>
      </div>

      {selectedProductIndex !== null && (
        <ProductModal
          product={products[selectedProductIndex]}
          isOpen={true}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </section>
  );
}
