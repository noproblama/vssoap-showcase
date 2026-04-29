import { ProductCard } from './ProductCard';

const products = [
  {
    id: 1,
    name: "Дитяче",
    category: "premium",
    price: "180 грн",
    description: "Найніжніше мило для малюків. Гіпоалергенне, з натуральними маслами.",
    image: "https://images.unsplash.com/photo-1606448009227-af1758630e60?w=800"
  },
  {
    id: 2,
    name: "Алеппське",
    category: "premium",
    price: "220 грн",
    description: "Традиційне сирійське мило з лавровим та оливковим маслами. Вислужує до 2 років.",
    image: "https://images.unsplash.com/photo-1546552768-9e3a94b38a59?w=800"
  },
  {
    id: 3,
    name: "Екзотичне",
    category: "regular",
    price: "150 грн",
    description: "З екзотичними оліями та ароматами. Живить та зволожує шкіру.",
    image: "https://images.unsplash.com/photo-1606447965993-60155023d1ae?w=800"
  },
  {
    id: 4,
    name: "Лавандове",
    category: "regular",
    price: "145 грн",
    description: "Заспокоює та розслабляє. З натуральною олією лаванди.",
    image: "https://images.unsplash.com/photo-1546552768-9e3a94b38a59?w=800"
  },
  {
    id: 5,
    name: "Медове",
    category: "regular",
    price: "155 грн",
    description: "З натуральним медом та прополісом. Живить та відновлює шкіру.",
    image: "https://images.unsplash.com/photo-1606448009227-af1758630e60?w=800"
  },
  {
    id: 6,
    name: "Полин-шавлія-пижмо",
    category: "regular",
    price: "140 грн",
    description: "Трав'яний букет для глибокого очищення. Ідеальне для проблемної шкіри.",
    image: "https://images.unsplash.com/photo-1546552768-9e3a94b38a59?w=800"
  },
  {
    id: 7,
    name: "Сольове",
    category: "regular",
    price: "135 грн",
    description: "З морською сіллю та мінералами. Пілінг та детокс для шкіри.",
    image: "https://images.unsplash.com/photo-1606447965993-60155023d1ae?w=800"
  },
  {
    id: 8,
    name: "Трояндове",
    category: "regular",
    price: "165 грн",
    description: "Ніжний аромат троянди. Зволожує та тонізує шкіру.",
    image: "https://images.unsplash.com/photo-1606448009227-af1758630e60?w=800"
  },
  {
    id: 9,
    name: "Квіткове",
    category: "regular",
    price: "145 грn",
    description: "Букет квіткових екстрактів. Делікатний догляд для всіх типів шкіри.",
    image: "https://images.unsplash.com/photo-1546552768-9e3a94b38a59?w=800"
  },
  {
    id: 10,
    name: "Полуничне (з подорожником)",
    category: "regular",
    price: "150 грн",
    description: "Солодкий аромат полуниці та цілющі властивості подорожника.",
    image: "https://images.unsplash.com/photo-1606447965993-60155023d1ae?w=800"
  },
  {
    id: 11,
    name: "Набори",
    category: "sets",
    price: "від 350 грн",
    description: "Дегустаційні набори або подарункові комплекти. Ідеально для подарунка.",
    image: "https://images.unsplash.com/photo-1546552768-9e3a94b38a59?w=800"
  }
];

export function ProductGrid() {
  return (
    <section className="py-20 px-6 bg-white" id="products">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-800">
          Наші вироби
        </h2>
        <p className="text-center text-stone-600 mb-16 text-lg">
          Кожен брусок створений з натуральних інгредієнтів
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
