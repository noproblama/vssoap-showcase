import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { DecorativeFlower, DecorativeLeaf, DecorativeWave } from './DecorativeElements';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Дитяче",
    category: "premium",
    price: "180 грн",
    description: "Найніжніше мило для малюків. Гіпоалергенне, з натуральними маслами.",
    detailedDescription: "Спеціально розроблене для ніжної дитячої шкіри. Не містить жодних агресивних компонентів, барвників чи синтетичних ароматів. Ідеально підходить для щоденного купання немовлят та дітей віком до 3 років. М'яко очищає, не пересушує шкіру.",
    image: "https://images.unsplash.com/photo-1606448009227-af1758630e60?w=800",
    ingredients: [
      "Оливкова олія холодного віджиму",
      "Кокосова олія",
      "Масло ши (карите)",
      "Рицинова олія",
      "Дистильована вода",
      "Гідроксид натрію (повністю нейтралізується)"
    ],
    benefits: [
      "Гіпоалергенне",
      "Без ароматизаторів та барвників",
      "М'яко очищає ніжну шкіру",
      "Підтримує природний pH баланс",
      "Протестовано дерматологами"
    ]
  },
  {
    id: 2,
    name: "Алеппське",
    category: "premium",
    price: "220 грн",
    description: "Традиційне сирійське мило з лавровим та оливковим маслами.",
    detailedDescription: "Виготовлене за старовинним сирійським рецептом, що налічує понад 2000 років історії. Мило вислужується мінімум 9 місяців, що робить його особливо м'яким та ефективним. Чим довше зберігається - тім краще стає. Ідеально для чутливої та проблемної шкіри.",
    image: "/src/imports/soap-aleppo-1.jpg",
    additionalImages: ["/src/imports/soap-aleppo-2.jpg", "/src/imports/soap-aleppo-3.jpg"],
    videoUrl: "/src/imports/soap-aleppo.mp4",
    ingredients: [
      "Оливкова олія Extra Virgin (80%)",
      "Лаврова олія (20%)",
      "Дистильована вода",
      "Гідроксид натрію"
    ],
    benefits: [
      "Підходить для проблемної шкіри",
      "Природні антисептичні властивості",
      "Допомагає при екземі та псоріазі",
      "Покращує стан шкіри голови",
      "Може використовуватись для гоління"
    ]
  },
  {
    id: 3,
    name: "Екзотичне",
    category: "regular",
    price: "150 грн",
    description: "З екзотичними оліями та ароматами. Живить та зволожує шкіру.",
    detailedDescription: "Розкішна композиція екзотичних олій, що транспортує вас до тропічного раю. Глибоко живить шкіру, залишаючи її оксамитово-м'якою. Ідеально для сухої та нормальної шкіри.",
    image: "/src/imports/soap-exotic-1.jpg",
    additionalImages: ["/src/imports/soap-exotic-2.jpg", "/src/imports/soap-exotic-3.jpg"],
    videoUrl: "/src/imports/soap-exotic.mp4",
    ingredients: [
      "Кокосова олія",
      "Олія макадамії",
      "Олія авокадо",
      "Масло какао",
      "Екстракт ванілі",
      "Ефірна олія іланг-іланг"
    ],
    benefits: [
      "Інтенсивне зволоження",
      "Пом'якшує огрубілу шкіру",
      "Тропічний аромат",
      "Підходить для масажу"
    ]
  },
  {
    id: 4,
    name: "Лавандове",
    category: "regular",
    price: "145 грн",
    description: "Заспокоює та розслабляє. З натуральною олією лаванди.",
    detailedDescription: "Мило з цілющими властивостями лаванди, яка вирощена в екологічно чистих районах. Ідеально підходить для вечірнього душу - заспокоює нервову систему та готує до здорового сну. Природний антисептик.",
    image: "/src/imports/soap-lavender-1.jpg",
    additionalImages: ["/src/imports/soap-lavender-2.jpg", "/src/imports/soap-lavender-3.jpg"],
    videoUrl: "/src/imports/soap-lavender.mp4",
    ingredients: [
      "Оливкова олія",
      "Кокосова олія",
      "Пальмова олія",
      "Ефірна олія лаванди",
      "Сухі квіти лаванди",
      "Каолінова глина"
    ],
    benefits: [
      "Заспокоює подразнену шкіру",
      "Розслабляючий ефект",
      "Природний антисептик",
      "Допомагає при безсонні",
      "М'яке очищення пір"
    ]
  },
  {
    id: 5,
    name: "Медове",
    category: "regular",
    price: "155 грн",
    description: "З натуральним медом та прополісом. Живить та відновлює шкіру.",
    detailedDescription: "Збагачене натуральним медом та прополісом від українських бджолярів. Мед — природний антиоксидант, що живить та відновлює шкіру. Прополіс має антибактеріальні властивості. Ідеально для осіннього та зимового періоду.",
    image: "/src/imports/soap-honey-1.jpg",
    additionalImages: ["/src/imports/soap-honey-2.jpg", "/src/imports/soap-honey-3.jpg"],
    videoUrl: "/src/imports/soap-honey.mp4",
    ingredients: [
      "Натуральний мед",
      "Прополіс",
      "Оливкова олія",
      "Молоко козине (опціонально)",
      "Воск бджолиний",
      "Ефірна олія апельсина"
    ],
    benefits: [
      "Живить та відновлює шкіру",
      "Антиоксидантний ефект",
      "Природний антисептик",
      "Покращує еластичність шкіру",
      "Приємний медовий аромат"
    ]
  },
  {
    id: 6,
    name: "Полин-шавлія-пижмо",
    category: "regular",
    price: "140 грн",
    description: "Трав'яний букет для глибокого очищення.",
    detailedDescription: "Потужна трав'яна композиція з українських луків. Ці рослини відомі своїми очищувальними та антисептичними властивостями. Ідеально підходить для проблемної та жирної шкіри. Особливо рекомендується влітку.",
    image: "https://images.unsplash.com/photo-1546552768-9e3a94b38a59?w=800",
    ingredients: [
      "Відвар полину",
      "Відвар шавлії",
      "Відвар пижма",
      "Оливкова олія",
      "Кокосова олія",
      "Зелена глина"
    ],
    benefits: [
      "Ідеально для жирної шкіри",
      "Природний антисептик",
      "Звужує пори",
      "Бореться з акне",
      "Тонізує та освіжає"
    ]
  },
  {
    id: 7,
    name: "Сольове",
    category: "regular",
    price: "135 грн",
    description: "З морською сіллю та мінералами. Пілінг та детокс.",
    detailedDescription: "Збагачене морською сіллю з Мертвого моря. Чудовий природний скраб, що м'яко відлущує мертві клітини шкіри. Мінерали в складі солі живлять та тонізують шкіру. Детокс-ефект для всього тіла.",
    image: "https://images.unsplash.com/photo-1606447965993-60155023d1ae?w=800",
    ingredients: [
      "Морська сіль (Мертве море)",
      "Гімалайська рожева сіль",
      "Кокосова олія",
      "Олія жожоба",
      "Ефірна олія м'яти",
      "Ефірна олія евкаліпта"
    ],
    benefits: [
      "М'який пілінг",
      "Детокс ефект",
      "Покращує кровообіг",
      "Збагачує мінералами",
      "Тонізує та освіжає"
    ]
  },
  {
    id: 8,
    name: "Трояндове",
    category: "regular",
    price: "165 грн",
    description: "Ніжний аромат троянди. Зволожує та тонізує.",
    detailedDescription: "Створене з екстрактом троянди та пелюстками троянди. Розкішний квітковий аромат дарує відчуття SPA-процедури вдома. Підходить для всіх типів шкіри, особливо для сухої та зрілої.",
    image: "https://images.unsplash.com/photo-1606448009227-af1758630e60?w=800",
    ingredients: [
      "Трояндова вода",
      "Пелюстки троянди",
      "Рожева глина",
      "Олія шипшини",
      "Олія жожоба",
      "Ефірна олія герані"
    ],
    benefits: [
      "Інтенсивне зволоження",
      "Антивікові властивості",
      "Тонізує шкіру",
      "Розкішний аромат",
      "Підходить для зрілої шкіри"
    ]
  },
  {
    id: 9,
    name: "Квіткове",
    category: "regular",
    price: "145 грн",
    description: "Букет квіткових екстрактів. Делікатний догляд.",
    detailedDescription: "Ніжна композиція з екстрактів польових та садових квітів. М'який догляд для чутливої шкіри. Делікатний квітковий аромат супроводжує вас протягом дня. Підходить для щоденного використання.",
    image: "/src/imports/soap-floral-1.jpg",
    additionalImages: ["/src/imports/soap-floral-2.jpg", "/src/imports/soap-floral-3.jpg"],
    videoUrl: "/src/imports/soap-floral.mp4",
    ingredients: [
      "Екстракт ромашки",
      "Екстракт календули",
      "Екстракт волошки",
      "Олія солодкого мигдалю",
      "Кокосова олія",
      "Натуральний ароматичний букет"
    ],
    benefits: [
      "Для чутливої шкіри",
      "М'яке очищення",
      "Заспокоює подразнення",
      "Ніжний квітковий аромат",
      "Підходить для щоденного використання"
    ]
  },
  {
    id: 10,
    name: "Полуничне (з подорожником)",
    category: "regular",
    price: "150 грн",
    description: "Солодкий аромат полуниці та цілющі властивості подорожника.",
    detailedDescription: "Унікальна комбінація насіння полуниці та екстракту подорожника. Полуничні зернятка створюють м'який пілінг-ефект, а подорожник відомий своїми ранозагоювальними властивостями. Ідеально для літнього сезону.",
    image: "https://images.unsplash.com/photo-1606447965993-60155023d1ae?w=800",
    ingredients: [
      "Насіння полуниці",
      "Екстракт подорожника",
      "Натуральний полуничний ароматизатор",
      "Оливкова олія",
      "Кокосова олія",
      "Рожева глина"
    ],
    benefits: [
      "М'який пілінг",
      "Ранозагоювальні властивості",
      "Солодкий фруктовий аромат",
      "Освіжає шкіру",
      "Підходить для юної шкіри"
    ]
  },
  {
    id: 11,
    name: "Набори",
    category: "sets",
    price: "від 350 грн",
    description: "Дегустаційні набори або подарункові комплекти.",
    detailedDescription: "Спеціально підібрані комбінації нашого мила у красивій екологічній упаковці. Ідеальний подарунок для близьких. Доступні дегустаційні набори (міні-бруски 4-6 видів) та повноцінні подарункові комплекти. Можливість індивідуального підбору складу набору.",
    image: "/src/imports/soap-sets-1.jpg",
    additionalImages: ["/src/imports/soap-sets-2.jpg", "/src/imports/soap-sets-9.jpg", "/src/imports/soap-sets-10.jpg", "/src/imports/soap-sets-11.jpg"],
    benefits: [
      "Готовий подарунок",
      "Красива упаковка",
      "Можливість спробувати різні види",
      "Економія до 15% порівняно з поштучною купівлею",
      "Індивідуальний підбір складу"
    ]
  }
];

export function ProductGrid() {
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);

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
      setSelectedProductIndex((selectedProductIndex - 1 + products.length) % products.length);
    }
  };

  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden" id="products">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <DecorativeFlower className="absolute top-10 left-10 w-16 h-16" />
        <DecorativeLeaf className="absolute top-40 right-20 w-20 h-20" />
        <DecorativeWave className="absolute top-1/2 left-0 w-64 h-32" />
        <DecorativeFlower className="absolute bottom-40 right-10 w-20 h-20" />
        <DecorativeLeaf className="absolute bottom-20 left-1/4 w-16 h-16" />
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
