import { asset } from "../lib/asset";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SoapProfile {
  scent?: { label: string; intensity: 1 | 2 | 3 | 4 | 5 };
  lather?: { label: string; strength: 1 | 2 | 3 | 4 | 5 };
  hardness?: { label: string; level: 1 | 2 | 3 | 4 | 5 };
  skinType?: string;
}

export interface KeyIngredient {
  name: string;
  role: string;
  tone?: "honey" | "sage" | "rose" | "clay" | "neutral";
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  detailedDescription?: string;
  ingredients?: string[];
  benefits?: string[];
  additionalImages?: string[];
  videoUrl?: string;
  tagline?: string;
  profile?: SoapProfile;
  keyIngredients?: KeyIngredient[];
  masterNote?: string;
  // ── English content ──
  en?: {
    name?: string;
    tagline?: string;
    description?: string;
    masterNote?: string;
    detailedDescription?: string;
    benefits?: string[];
    ingredients?: string[];
    keyIngredients?: KeyIngredient[];
    profile?: SoapProfile;
  };
  // ── dynamic fields (overridden from Google Sheets at runtime) ──
  status?: "ready" | "curing";
  cureUntil?: string;
  cureUntil_en?: string;
  stockNote?: string;
  stockNote_en?: string;
  price_en?: string;
}

// ─── Static product catalogue ─────────────────────────────────────────────────
// status / cureUntil / stockNote are set here as defaults.
// When Google Sheets sync is wired (see src/app/lib/useSheetData.ts),
// those three fields will be overridden at runtime per product.

export const products: Product[] = [
  /* ── 1 ── Дитяче ──────────────────────────────────────────────────────── */
  {
    id: 1,
    slug: "baby",
    name: "Дитяче",
    category: "premium",
    price: "350 грн / 100г",
    description:
      "Класичне кастильське мило на основі оливкової олії. Надзвичайно лагідне — ідеальне для сухої, чутливої та дитячої шкіри.",
    tagline: "найніжніше з можливого",
    profile: {
      scent: { label: "Ніжна лаванда", intensity: 2 },
      lather: { label: "Кремова, дрібна", strength: 3 },
      hardness: { label: "Мʼяке", level: 2 },
      skinType: "Дитяча · суха · чутлива",
    },
    keyIngredients: [
      { name: "Оливкова олія", role: "мʼякість", tone: "sage" },
      { name: "Екстракт ромашки", role: "заспокоєння", tone: "honey" },
      { name: "Ефірна олія лаванди", role: "ароматерапія", tone: "sage" },
      { name: "Рицинова олія", role: "піна", tone: "neutral" },
    ],
    masterNote:
      "Перший рецепт, який повторюю кожного року. Ромашка заспокоює, лаванда обʼєднує — і не для маркетингу, а по-справжньому. Ставлю собі одну планку: щоб шкіра після, навіть найніжніша, була мʼякою, як перед сном.",
    detailedDescription:
      "Це мило можна охарактеризувати як класичне ніжне кастильське мило (збагачене). Завдяки високому вмісту оливкової олії воно надзвичайно лагідне до шкіри — ідеальне для сухого, чутливого або дитячого типу шкіри.\n\n## Як працює\nЦе мило — «делікатний кондиціонер». Оливкова олія забезпечує дуже низький рівень агресивності, не пересушує шкіру, створює відчуття мʼякості та зволоження. Екстракт СО2 ромашки підсилює заспокійливий ефект — ромашка має протизапальні властивості, що в поєднанні з лавандою робить це мило чудовим засобом для зняття подразнень.\n\nРицинова олія робить піну більш стабільною та пухирчастою. Кокосова олія забезпечує достатнє очищення без порушення ліпідного барʼєру шкіри. Цитрат натрію помʼякшує воду та допомагає милу краще митися в жорсткій воді. 100% ефірна олія лаванди має ароматерапевтичний ефект та легкі антисептичні властивості.\n\n## Тонкощі догляду\nЧерез високий вміст оливки використовуйте мильницю з гарним стоком або мішечок для мила — так брусок служитиме значно довше.",
    image: asset("soap-children-1.jpg"),
    additionalImages: [asset("soap-children-2.jpg")],
    videoUrl: asset("soap-children.mp4"),
    ingredients: [
      "Оливкова олія",
      "Кокосова олія",
      "Рицинова олія",
      "Цитрат натрію",
      "Натрій їдкий (повністю нейтралізується)",
      "Екстракт СО2 ромашки",
      "100% ефірна олія лаванди",
    ],
    benefits: [
      "Заспокійлива та протизапальна дія",
      "Антибактеріальний та антисептичний ефект",
      "Регенерує та зволожує шкіру",
      "Живить без пересушування",
      "Ідеально для чутливої та дитячої шкіри",
      "Мʼяке очищення, натуральний гліцерин",
    ],
    en: {
      name: "Baby",
      tagline: "the gentlest possible",
      description: "Classic Castile soap based on olive oil. Exceptionally mild — perfect for dry, sensitive and baby skin.",
      masterNote: "The first recipe I remake every year. Chamomile soothes, lavender binds — not for the label, but genuinely. I hold myself to one standard: skin should feel soft afterwards, even the most delicate, like before sleep.",
      detailedDescription: "This soap is best described as a classic, enriched Castile bar. Thanks to its high olive oil content it is exceptionally gentle — ideal for dry, sensitive or baby skin.\n\n## How it works\nThis soap is a «delicate conditioner». Olive oil keeps aggressiveness very low, does not dry the skin, and leaves a feeling of softness and moisture. CO₂ chamomile extract amplifies the soothing effect — chamomile has anti-inflammatory properties, and together with lavender makes this soap wonderful for calming irritation.\n\nCastor oil makes the lather more stable and bubbly. Coconut oil provides sufficient cleansing without disrupting the skin's lipid barrier. Sodium citrate softens water and helps the soap lather better in hard water. 100% lavender essential oil has an aromatherapeutic effect and mild antiseptic properties.\n\n## Care tips\nDue to the high olive content, use a soap dish with good drainage or a soap bag — the bar will last considerably longer.",
      benefits: [
        "Soothing and anti-inflammatory",
        "Antibacterial and antiseptic",
        "Regenerates and moisturises",
        "Nourishes without drying",
        "Ideal for sensitive and baby skin",
        "Gentle cleansing with natural glycerin",
      ],
      ingredients: [
        "Olive oil",
        "Coconut oil",
        "Castor oil",
        "Sodium citrate",
        "Sodium hydroxide (fully neutralised)",
        "CO₂ chamomile extract",
        "100% lavender essential oil",
      ],
      keyIngredients: [
        { name: "Olive oil", role: "softness", tone: "sage" },
        { name: "Chamomile extract", role: "soothing", tone: "honey" },
        { name: "Lavender essential oil", role: "aromatherapy", tone: "sage" },
        { name: "Castor oil", role: "lather", tone: "neutral" },
      ],
      profile: {
        scent: { label: "Soft lavender", intensity: 2 },
        lather: { label: "Creamy, fine", strength: 3 },
        hardness: { label: "Soft", level: 2 },
        skinType: "Baby · dry · sensitive",
      },
    },
    status: "ready",
  },

  /* ── 2 ── Алепське ────────────────────────────────────────────────────── */
  {
    id: 2,
    slug: "aleppo",
    name: "Алепське",
    category: "premium",
    price: "480 грн / 100г",
    description:
      "Одне з найдавніших мил у світі. Оливкова та лаврова олії, відвар і ефірна олія лавра. Справжній терапевтичний засіб.",
    tagline: "терапевтичне",
    profile: {
      scent: { label: "Лавровий ліс", intensity: 4 },
      lather: { label: "Кремова, дрібна", strength: 3 },
      hardness: { label: "Тверде", level: 4 },
      skinType: "Проблемна · жирна · з дерматозами",
    },
    keyIngredients: [
      { name: "Оливкова олія", role: "основа", tone: "sage" },
      { name: "Олія лавра 25%", role: "терапія", tone: "sage" },
      { name: "Відвар лаврового листя", role: "тонус", tone: "sage" },
      { name: "Ефірна олія лавра", role: "аромат", tone: "honey" },
    ],
    masterNote:
      "Олія лавра — 25% від маси, і це не для показу. Вона й визначає всю роботу цього мила: антисептик, терапія, характерний запах. Чекаю визрівання від пів року до двох — і кожен брусок виходить із зеленою серцевиною, як в оригінальному сирійському рецепті.",
    detailedDescription:
      "Алепське мило вважається одним із найдавніших видів мила у світі. Його унікальність — в поєднанні базової оливкової олії та цілющої олії лавра благородного. Відвар листя, олія лавра (25%) та ефірна олія лавра роблять цей продукт справжнім терапевтичним засобом.\n\n## Як працює\nМило ефективно очищає пори, не порушуючи природний гідроліпідний баланс. Дає ніжну, кремову, дрібнопузирчасту піну. Характерний пряний, терпкий, травʼянисто-деревний аромат стає глибшим та стійкішим завдяки 100% ефірній олії лавра.\n\nОливкова олія забезпечує мʼякість і зволоження, живить вітамінами А та Е. Відвар лавра додає дубильні речовини, тонізує шкіру та знімає подразнення.\n\n## Колір та дозрівання\nКолір — від темно-оливкового до коричнево-зеленого; під час визрівання верхній шар стає золотисто-бежевим, залишаючи насичену зелену серцевину.\n\nМило потребує тривалого визрівання — від 6–9 місяців до 1–2 років, після чого стає максимально мʼяким для шкіри та твердим у використанні.\n\n## Тонкощі догляду\nЧерез високий вміст оливки використовуйте мильницю з гарним стоком або мішечок для мила.",
    image: asset("soap-aleppo-2.jpg"),
    additionalImages: [asset("soap-aleppo-3.jpg")],
    videoUrl: asset("soap-aleppo.mp4"),
    ingredients: [
      "Оливкова олія",
      "Олія лавра благородного (25%)",
      "Відвар лаврового листя",
      "100% ефірна олія лавра",
      "Натрій їдкий (повністю нейтралізується)",
    ],
    benefits: [
      "Антисептична та протизапальна дія",
      "Допомагає при акне та дерматитах",
      "Ефективний при екземі та псоріазі",
      "Мʼяко очищає пори, не порушуючи гідроліпідний баланс",
      "Можна використовувати як шампунь (при лупі)",
      "Живить шкіру вітамінами А та Е",
    ],
    en: {
      name: "Aleppo",
      tagline: "therapeutic",
      description: "One of the oldest soaps in the world. Olive and bay laurel oils, bay leaf decoction and essential oil. A true therapeutic product.",
      masterNote: "Bay laurel oil — 25% of the weight, and not for show. It defines everything this soap does: antiseptic, therapeutic, that characteristic scent. I wait for it to cure from six months to two years — and every bar comes out with a green core, just like the original Syrian recipe.",
      detailedDescription: "Aleppo soap is considered one of the oldest soaps in the world. Its uniqueness lies in combining base olive oil with the healing bay laurel oil. Bay leaf decoction, laurel oil (25%) and laurel essential oil make this product a true therapeutic agent.\n\n## How it works\nThe soap effectively cleanses pores without disturbing the natural hydrolipid balance. It produces a gentle, creamy, fine-bubbled lather. The characteristic spicy, slightly bitter, herbaceous-woody aroma is deepened by 100% bay laurel essential oil.\n\nOlive oil provides softness and moisture, nourishing with vitamins A and E. Bay leaf decoction adds tannins, tones the skin and soothes irritation.\n\n## Colour and curing\nColour ranges from dark olive to brownish-green; as it cures, the outer layer turns golden-beige while leaving a rich green core.\n\nThe soap requires long curing — from 6–9 months up to 1–2 years, after which it becomes maximally gentle on the skin and hard in use.\n\n## Care tips\nDue to the high olive content, use a soap dish with good drainage or a soap bag.",
      benefits: [
        "Antiseptic and anti-inflammatory",
        "Helps with acne and dermatitis",
        "Effective for eczema and psoriasis",
        "Gently cleanses pores without disrupting the hydrolipid balance",
        "Can be used as a shampoo (for dandruff)",
        "Nourishes skin with vitamins A and E",
      ],
      ingredients: [
        "Olive oil",
        "Bay laurel oil (25%)",
        "Bay leaf decoction",
        "100% bay laurel essential oil",
        "Sodium hydroxide (fully neutralised)",
      ],
      keyIngredients: [
        { name: "Olive oil", role: "base", tone: "sage" },
        { name: "Bay laurel oil 25%", role: "therapy", tone: "sage" },
        { name: "Bay leaf decoction", role: "toning", tone: "sage" },
        { name: "Bay laurel essential oil", role: "scent", tone: "honey" },
      ],
      profile: {
        scent: { label: "Bay laurel forest", intensity: 4 },
        lather: { label: "Creamy, fine", strength: 3 },
        hardness: { label: "Hard", level: 4 },
        skinType: "Problematic · oily · with dermatoses",
      },
    },
    status: "curing",
    cureUntil: "серпня 2026",
  },

  /* ── 3 ── Екзотичне ───────────────────────────────────────────────────── */
  {
    id: 3,
    slug: "exotic",
    name: "Екзотичне",
    category: "regular",
    price: "200 грн / 100г",
    description:
      "Перезавантаження для тіла та духу. Пʼять базових і три цілющі олії, блакитна глина, ароматна композиція апельсину, іланг-іланг та пачулі.",
    tagline: "після важкого тижня",
    profile: {
      scent: { label: "Цитрусова амбра", intensity: 4 },
      lather: { label: "Густа кремова", strength: 4 },
      hardness: { label: "Середня", level: 3 },
      skinType: "Комбінована · стомлена · вікова",
    },
    keyIngredients: [
      { name: "5 базових олій + какао", role: "живлення", tone: "honey" },
      { name: "Олія обліпихи", role: "антиоксидант", tone: "honey" },
      { name: "Блакитна глина", role: "детокс", tone: "clay" },
      { name: "Іланг-іланг, пачулі", role: "ароматерапія", tone: "rose" },
    ],
    masterNote:
      "Зварила це для себе — після особливо важкого тижня. Пачулі та іланг-іланг не просто ароматизують, вони буквально перемикають. А блакитна глина виводить усе, що накопичилося за тиждень — і з пор, і ментально.",
    detailedDescription:
      "Натуральне мило ручної роботи «Екзотичне» — перезавантаження для тіла та духу. У сучасному світі енергія — найцінніший ресурс, і «Екзотичне» — твоя щоденна інвестиція в себе.\n\n## Як працює\nПʼять базових олій (олива, кокос, пальма, рицина, какао) — ідеальне поєднання для глибокого зволоження та живлення: вони роблять шкіру еластичною та сяючою.\n\nТри цілющі олії (обліпиха, абрикосова кісточка, зародки пшениці) діють як потужний антиоксидантний коктейль, що захищає клітини від стресу та підтримує молодість шкіри.\n\nБлакитна глина мʼяко ексфоліює, виводить токсини та покращує тонус шкіри. Лимонна та молочна кислоти надають кондиціонуючий ефект та приємну текстуру.\n\n## Аромат і настрій\nУнікальна ароматична композиція апельсину, іланг-іланг та пачулі миттєво знімає напругу та покращує настрій. Підходить для щоденного очищення та відновлювального догляду за обличчям і тілом.",
    image: asset("soap-exotic-2.jpg"),
    additionalImages: [asset("soap-exotic-3.jpg")],
    videoUrl: asset("soap-exotic.mp4"),
    ingredients: [
      "Кокосова, оливкова, пальмова олії",
      "Рицинова олія, масло какао",
      "Олія обліпихи",
      "Олія зародків пшениці",
      "Олія абрикосових кісточок",
      "Блакитна глина",
      "Лимонна та молочна кислоти",
      "100% ефірні олії апельсину, іланг-іланг, пачулі",
    ],
    benefits: [
      "Антиоксидантний захист та відновлення клітин",
      "Мʼякий пілінг та детокс (блакитна глина)",
      "Стимулює регенерацію без агресивного тертя",
      "Кондиціонуючий ефект, шовковиста текстура",
      "Ароматерапія: знімає напругу, покращує настрій",
      "Підходить для комбінованої, стомленої та вікової шкіри",
    ],
    en: {
      name: "Exotic",
      tagline: "after a hard week",
      description: "A reset for body and spirit. Five base oils and three healing oils, blue clay, an aromatic blend of orange, ylang-ylang and patchouli.",
      masterNote: "I made this for myself — after a particularly hard week. Patchouli and ylang-ylang don't just add fragrance, they literally switch you over. And blue clay draws out everything that accumulated during the week — from your pores and your mind.",
      detailedDescription: "«Exotic» handcrafted natural soap — a reset for body and spirit. In the modern world, energy is the most precious resource, and Exotic is your daily investment in yourself.\n\n## How it works\nFive base oils (olive, coconut, palm, castor, cocoa) — the ideal combination for deep hydration and nourishment: they make skin elastic and radiant.\n\nThree healing oils (sea buckthorn, apricot kernel, wheat germ) act as a powerful antioxidant cocktail, protecting cells from stress and supporting youthful skin.\n\nBlue clay gently exfoliates, draws out toxins and improves skin tone. Lemon and lactic acids provide a conditioning effect and pleasant texture.\n\n## Scent and mood\nThe unique aromatic blend of orange, ylang-ylang and patchouli instantly relieves tension and lifts the mood. Suitable for daily cleansing and restorative care for face and body.",
      benefits: [
        "Antioxidant protection and cell renewal",
        "Gentle exfoliation and detox (blue clay)",
        "Stimulates regeneration without aggressive friction",
        "Conditioning effect, silky texture",
        "Aromatherapy: relieves tension, lifts mood",
        "Suitable for combination, fatigued and mature skin",
      ],
      ingredients: [
        "Olive, coconut, palm oils",
        "Castor oil, cocoa butter",
        "Sea buckthorn oil",
        "Wheat germ oil",
        "Apricot kernel oil",
        "Blue clay",
        "Lemon and lactic acids",
        "100% essential oils of orange, ylang-ylang, patchouli",
      ],
      keyIngredients: [
        { name: "5 base oils + cocoa butter", role: "nourishment", tone: "honey" },
        { name: "Sea buckthorn oil", role: "antioxidant", tone: "honey" },
        { name: "Blue clay", role: "detox", tone: "clay" },
        { name: "Ylang-ylang, patchouli", role: "aromatherapy", tone: "rose" },
      ],
      profile: {
        scent: { label: "Citrus amber", intensity: 4 },
        lather: { label: "Rich creamy", strength: 4 },
        hardness: { label: "Medium", level: 3 },
        skinType: "Combination · fatigued · mature",
      },
    },
    status: "ready",
  },

  /* ── 4 ── Лавандове ───────────────────────────────────────────────────── */
  {
    id: 4,
    slug: "lavender",
    name: "Лавандове",
    category: "regular",
    price: "210 грн / 100г",
    description:
      "Заспокоює та розслабляє. Олія ши, фісташкова олія, відвар квітів лаванди, блакитна глина та 100% ефірна олія лаванди.",
    tagline: "щоб краще спалось",
    profile: {
      scent: { label: "Квітуча лаванда", intensity: 4 },
      lather: { label: "Шовковиста кремова", strength: 4 },
      hardness: { label: "Середня", level: 3 },
      skinType: "Усі типи · стресована",
    },
    keyIngredients: [
      { name: "Олія ши (каріте)", role: "живлення", tone: "honey" },
      { name: "Фісташкова олія", role: "ніжність", tone: "sage" },
      { name: "Відвар квітів лаванди", role: "заспокоєння", tone: "sage" },
      { name: "Блакитна глина", role: "детокс", tone: "clay" },
      { name: "Ефірна олія лаванди", role: "ароматерапія", tone: "sage" },
    ],
    masterNote:
      "Фісташкова олія тут — маленький секрет: саме вона робить піну такою оксамитовою, а не просто кремовою. Олія ши і квітковий відвар роблять решту. Зварила вперше після безсонної ночі — відтоді кожна партія знаходить того, кому зараз найбільше потрібна тиха година.",
    detailedDescription:
      "Натуральне мило ручної роботи, створене холодним способом. Поєднання кокосової, оливкової та пальмової олій забезпечує ідеальну піну та делікатне очищення.\n\n## Як працює\nОлія ши (каріте) глибоко живить, фісташкова олія та олія абрикосової кісточки роблять текстуру мила неймовірно ніжною, залишаючи шкіру оксамитовою на дотик.\n\nБлакитна глина — природний мінерал, який мʼяко виводить токсини, делікатно ексфоліює та вирівнює тон шкіри, надаючи милу благородного природного відтінку.\n\nМолочна та лимонна кислоти роблять мило «шовковистим», помʼякшують воду та запобігають сухості шкіри.\n\n## Аромат і ритуал\nНасичений відвар квітів лаванди у поєднанні з натуральною 100% ефірною олією дарує заспокійливий аромат та має антисептичні властивості: допомагає зняттю стресу та релаксації, покращенню сну, зменшенню втоми та підняттю настрою. Аромат травʼянистий, свіжий, з виразними нотами квітучої лаванди.\n\n## Тонкощі догляду\nДля продовження життя натурального мила зберігайте у мильниці з отворами для стоку або в мішечку для мила.",
    image: asset("soap-lavender-2.jpg"),
    additionalImages: [asset("soap-lavender-3.jpg")],
    videoUrl: asset("soap-lavender.mp4"),
    ingredients: [
      "Кокосова, оливкова, пальмова олії",
      "Олія ши (каріте)",
      "Фісташкова олія",
      "Олія абрикосової кісточки",
      "Відвар квітів лаванди",
      "Блакитна глина",
      "Лимонна та молочна кислоти",
      "100% ефірна олія лаванди",
    ],
    benefits: [
      "Заспокійлива та розслаблювальна дія",
      "Мʼяке виведення токсинів (блакитна глина)",
      "Делікатна ексфоліація та вирівнювання тону",
      "Ароматерапія: знімає стрес, покращує сон",
      "Зволожує та живить, шкіра оксамитова на дотик",
      "Підходить для всіх типів шкіри",
    ],
    en: {
      name: "Lavender",
      tagline: "for a better night's sleep",
      description: "Soothes and relaxes. Shea butter, pistachio oil, lavender flower decoction, blue clay and 100% lavender essential oil.",
      masterNote: "Pistachio oil is the little secret here: it's what makes the lather so velvety rather than just creamy. Shea butter and the flower decoction do the rest. I made it first after a sleepless night — since then every batch finds whoever needs a quiet hour most.",
      detailedDescription: "Natural handcrafted soap made by cold process. The combination of coconut, olive and palm oils provides ideal lather and delicate cleansing.\n\n## How it works\nShea butter (karite) deeply nourishes; pistachio oil and apricot kernel oil make the soap's texture incredibly gentle, leaving skin velvety to the touch.\n\nBlue clay — a natural mineral that gently draws out toxins, delicately exfoliates and evens skin tone, giving the soap its noble natural hue.\n\nLactic and lemon acids make the soap «silky», soften water and prevent skin dryness.\n\n## Scent and ritual\nA rich lavender flower decoction combined with 100% natural essential oil bestows a calming aroma with antiseptic properties: helps relieve stress and promote relaxation, improves sleep, reduces fatigue and lifts mood. The scent is herbaceous, fresh, with distinct notes of blooming lavender.\n\n## Care tips\nTo extend the life of natural soap, store on a soap dish with drainage holes or in a soap bag.",
      benefits: [
        "Soothing and relaxing",
        "Gentle detox (blue clay)",
        "Delicate exfoliation and tone-evening",
        "Aromatherapy: relieves stress, improves sleep",
        "Hydrates and nourishes, skin velvety to the touch",
        "Suitable for all skin types",
      ],
      ingredients: [
        "Coconut, olive, palm oils",
        "Shea butter (karite)",
        "Pistachio oil",
        "Apricot kernel oil",
        "Lavender flower decoction",
        "Blue clay",
        "Lemon and lactic acids",
        "100% lavender essential oil",
      ],
      keyIngredients: [
        { name: "Shea butter (karite)", role: "nourishment", tone: "honey" },
        { name: "Pistachio oil", role: "silkiness", tone: "sage" },
        { name: "Lavender flower decoction", role: "soothing", tone: "sage" },
        { name: "Blue clay", role: "detox", tone: "clay" },
        { name: "Lavender essential oil", role: "aromatherapy", tone: "sage" },
      ],
      profile: {
        scent: { label: "Blooming lavender", intensity: 4 },
        lather: { label: "Silky creamy", strength: 4 },
        hardness: { label: "Medium", level: 3 },
        skinType: "All types · stressed",
      },
    },
    status: "ready",
  },

  /* ── 5 ── Медове ──────────────────────────────────────────────────────── */
  {
    id: 5,
    slug: "honey",
    name: "Медове",
    category: "regular",
    price: "180 грн / 100г",
    description:
      "Ніжний догляд із натуральним медом та бджолиним воском. Олії обліпихи та мигдалю, ефірні олії апельсину та ладану — живлення, зволоження та ароматерапія.",
    tagline: "порятунок для шкіри взимку",
    profile: {
      scent: { label: "Тепла амбра (апельсин, ладан)", intensity: 3 },
      lather: { label: "Кремова", strength: 4 },
      hardness: { label: "Середня", level: 3 },
      skinType: "Суха · зневоднена · чутлива",
    },
    keyIngredients: [
      { name: "Натуральний мед", role: "зволоження", tone: "honey" },
      { name: "Бджолиний віск", role: "захист", tone: "honey" },
      { name: "Олія обліпихи", role: "регенерація", tone: "honey" },
      { name: "Олія солодкого мигдалю", role: "мʼякість", tone: "neutral" },
      {
        name: "Ефірні олії апельсину, ладану",
        role: "ароматерапія",
        tone: "rose",
      },
    ],
    masterNote:
      "Мед тут не аромат — він справді утримує вологу в шкірі. А бджолиний віск створює захисну вуаль, яка рятує від зими, але не закриває пори. Зварила вперше для подруги — у неї тріскали руки, і більше до аптечних кремів вона не повернулася.",
    detailedDescription:
      "Ніжний догляд, подарований самою природою. «Медове» має багатий доглядовий пережир (superfat) — частина найцінніших олій не вступила в реакцію з лугом, а залишилася у милі в чистому вигляді, щоб працювати безпосередньо на користь вашої шкіри.\n\n## Як працює\nНатуральний мед — природний зволожувач, який притягує та утримує вологу в шкірі, роблячи її неймовірно мʼякою та еластичною.\n\nБджолиний віск створює на шкірі дихаючу вуаль, яка захищає від пересушування, вітру та жорсткої води.\n\nОлія обліпихи — справжнє «рідке золото» для шкіри, має потужну загоювальну дію, покращує колір обличчя та тіла. Олія солодкого мигдалю усуває лущення та сухість, повертаючи шкірі тонус.\n\nЛимонна та молочна кислоти роблять піну неймовірно кремовою та помʼякшують воду. Ефірна олія апельсину піднімає настрій та тонізує шкіру. Ефірна олія ладану — із омолоджуючим ефектом, розгладжує, заспокоює шкіру та дарує відчуття гармонії та спокою.\n\n## Кому особливо доречне\nСтане справжнім порятунком для сухої, зневодненої та чутливої шкіри, що потребує вітамінного підживлення — особливо в осінньо-зимовий період.",
    image: asset("soap-honey-2.jpg"),
    additionalImages: [asset("soap-honey-3.jpg")],
    videoUrl: asset("soap-honey.mp4"),
    ingredients: [
      "Оливкова, кокосова, пальмова, рицинова олії",
      "Масло какао",
      "Олія обліпихи",
      "Олія солодкого мигдалю",
      "Натуральний мед",
      "Бджолиний віск",
      "Молочна та лимонна кислоти",
      "100% ефірні олії апельсину та ладану",
    ],
    benefits: [
      "Делікатне очищення та глибоке живлення",
      "Зволоження та утримання вологи (натуральний мед)",
      "Регенерація та відновлення клітин",
      "Захист від пересушування та вітру (бджолиний віск)",
      "Потужна антиоксидантна та загоювальна дія (обліпиха)",
      "Ароматерапія: тонізує та заспокоює (апельсин, ладан)",
    ],
    en: {
      name: "Honey",
      tagline: "skin's winter saviour",
      description: "Gentle care with natural honey and beeswax. Sea buckthorn and sweet almond oils, essential oils of orange and frankincense — nourishment, hydration and aromatherapy.",
      masterNote: "Honey here is not just fragrance — it genuinely holds moisture in the skin. And beeswax creates a protective veil that saves you from winter without clogging pores. I made it first for a friend — her hands were cracking, and she never went back to pharmacy creams.",
      detailedDescription: "Gentle care, gifted by nature itself. «Honey» has a rich nourishing superfat — part of the most precious oils did not react with the lye and remain in the soap in pure form, working directly for the benefit of your skin.\n\n## How it works\nNatural honey is a natural humectant that attracts and retains moisture in the skin, making it incredibly soft and elastic.\n\nBeeswax creates a breathable veil on the skin that protects from drying, wind and hard water.\n\nSea buckthorn oil — true «liquid gold» for the skin, has powerful healing action, improves the colour of face and body. Sweet almond oil eliminates flaking and dryness, restoring skin tone.\n\nLemon and lactic acids make the lather incredibly creamy and soften water. Orange essential oil lifts mood and tones the skin. Frankincense essential oil — with an anti-ageing effect, smoothes and soothes the skin, bringing a feeling of harmony and calm.\n\n## Who benefits most\nBecomes a true saviour for dry, dehydrated and sensitive skin needing vitamin nourishment — especially in autumn and winter.",
      benefits: [
        "Delicate cleansing and deep nourishment",
        "Hydration and moisture retention (natural honey)",
        "Regeneration and cell renewal",
        "Protection from drying and wind (beeswax)",
        "Powerful antioxidant and healing action (sea buckthorn)",
        "Aromatherapy: tones and soothes (orange, frankincense)",
      ],
      ingredients: [
        "Olive, coconut, palm, castor oils",
        "Cocoa butter",
        "Sea buckthorn oil",
        "Sweet almond oil",
        "Natural honey",
        "Beeswax",
        "Lactic and lemon acids",
        "100% essential oils of orange and frankincense",
      ],
      keyIngredients: [
        { name: "Natural honey", role: "hydration", tone: "honey" },
        { name: "Beeswax", role: "protection", tone: "honey" },
        { name: "Sea buckthorn oil", role: "regeneration", tone: "honey" },
        { name: "Sweet almond oil", role: "softness", tone: "neutral" },
        { name: "Orange & frankincense oils", role: "aromatherapy", tone: "rose" },
      ],
      profile: {
        scent: { label: "Warm amber (orange, frankincense)", intensity: 3 },
        lather: { label: "Creamy", strength: 4 },
        hardness: { label: "Medium", level: 3 },
        skinType: "Dry · dehydrated · sensitive",
      },
    },
    status: "ready",
  },

  /* ── 6 ── Полин-шавлія-пижмо ──────────────────────────────────────────── */
  {
    id: 6,
    slug: "wormwood",
    name: "Полин-шавлія-пижмо",
    category: "regular",
    price: "200 грн / 100г",
    description:
      "Травʼяний детокс-кокон для тіла. Полин, шавлія та пижмо зі смарагдовою і рожевою глинами — глибоке очищення, відновлення та антибактеріальний захист.",
    tagline: "коли шкіра просить справжнього очищення",
    profile: {
      scent: { label: "Гірський полин", intensity: 5 },
      lather: { label: "Густа кремова", strength: 4 },
      hardness: { label: "Тверде", level: 4 },
      skinType: "Проблемна · жирна · комбінована",
    },
    keyIngredients: [
      { name: "Полин", role: "детокс", tone: "sage" },
      { name: "Шавлія (мацерат)", role: "загоєння", tone: "sage" },
      { name: "Пижмо", role: "тонус", tone: "sage" },
      { name: "Смарагдова + рожева глини", role: "очищення", tone: "clay" },
      { name: "Лляна олія (Омега-3)", role: "відновлення", tone: "honey" },
    ],
    masterNote:
      "Дві глини — смарагдова і рожева — щоб глибоке очищення не було грубим. Три гіркі трави — щоб справді детоксикувало. Ризикована комбінація, але саме за цей різкий, степовий аромат одне й те ж замовлення повертається третій раз поспіль.",
    detailedDescription:
      "Натуральне крафтове мило «з нуля» холодним способом — «травʼяний детокс-кокон»: достатньо сильне, щоб очистити, але достатньо ніжне, щоб відновити барʼєрну функцію епідермісу.\n\n## Травʼяна трійця\n**Полин** — король детоксикації, знімає запалення, бореться з бактеріями та дарує неповторний аромат степу.\n\n**Шавлія** (у відварі та мацераті) — природний антиоксидант; мацерат зберігає ефірні сполуки рослини, які допомагають загоювати мікротріщини та знімати запалення.\n\n**Пижмо** має сильні протизапальні та тонізуючі властивості, заспокоює подразнену шкіру.\n\n## Глини та олії\n**Смарагдова глина** буквально «витягує» забруднення з пор, стимулює кровообіг і насичує шкіру мінералами. **Рожева глина** діє мʼяко — ідеально для тонкої шкіри, схильної до почервонінь, дарує здорове сяйво.\n\nЛляна олія, багата на Омега-3, інтенсивно відновлює шкірний барʼєр. Мигдальна олія помʼякшує шкіру, роблячи її оксамитовою на дотик.\n\n## Аромат і ритуал\nЕфірні олії полину та шавлії створюють холодний, гіркувато-свіжий аромат, що допомагає зібратися з думками та зняти стрес. Іланг-іланг додає легку квіткову нотку та відома своїми антидепресивними властивостями.",
    image: asset("soap-wormwood-sage-tansy-1.jpg"),
    additionalImages: [asset("soap-wormwood-sage-tansy-3.jpg")],
    videoUrl: asset("soap-wormwood-sage-tansy.mp4"),
    ingredients: [
      "Кокосова, оливкова, пальмова олії, олія ши",
      "Лляна та мигдальна олії",
      "Відвар та мацерат шавлії",
      "Полин, пижмо",
      "Смарагдова та рожева глини",
      "Лимонна та молочна кислоти",
      "100% ефірні олії полину, шавлії, іланг-іланг",
    ],
    benefits: [
      "Глибоке очищення та детокс (смарагдова глина)",
      "Протизапальна та антибактеріальна дія",
      "Допомагає при запаленнях та висипаннях",
      "Загоювання мікротріщин (шавлія, лляна олія)",
      "Відновлення здорового кольору обличчя та тіла",
      "Ароматерапія: знімає стрес та ментальне перевантаження",
    ],
    en: {
      name: "Wormwood",
      tagline: "when your skin asks for real cleansing",
      description: "A herbal detox cocoon for the body. Wormwood, sage and tansy with emerald and pink clays — deep cleansing, renewal and antibacterial protection.",
      masterNote: "Two clays — emerald and pink — so that deep cleansing is never harsh. Three bitter herbs — so it truly detoxes. A risky combination, but that sharp, steppe aroma is why the same order comes back for the third time in a row.",
      detailedDescription: "Natural craft soap made from scratch by cold process — a «herbal detox cocoon»: strong enough to cleanse, yet gentle enough to restore the skin's barrier function.\n\n## The herbal trio\n**Wormwood** — the king of detox, reduces inflammation, fights bacteria and gives an unmistakable steppe aroma.\n\n**Sage** (in decoction and macerate) — a natural antioxidant; the macerate preserves the plant's volatile compounds, which help heal micro-tears and reduce inflammation.\n\n**Tansy** has strong anti-inflammatory and toning properties, soothes irritated skin.\n\n## Clays and oils\n**Emerald clay** literally «draws» impurities from pores, stimulates circulation and saturates the skin with minerals. **Pink clay** acts gently — ideal for fine skin prone to redness, giving a healthy glow.\n\nFlaxseed oil, rich in Omega-3, intensively restores the skin barrier. Almond oil softens the skin, making it velvety to the touch.\n\n## Scent and ritual\nEssential oils of wormwood and sage create a cool, bittersweet-fresh scent that helps gather thoughts and relieve stress. Ylang-ylang adds a light floral note and is known for its antidepressant properties.",
      benefits: [
        "Deep cleansing and detox (emerald clay)",
        "Anti-inflammatory and antibacterial",
        "Helps with breakouts and inflammation",
        "Heals micro-tears (sage, flaxseed oil)",
        "Restores healthy skin colour",
        "Aromatherapy: relieves stress and mental overload",
      ],
      ingredients: [
        "Coconut, olive, palm oils, shea butter",
        "Flaxseed and almond oils",
        "Sage decoction and macerate",
        "Wormwood, tansy",
        "Emerald and pink clays",
        "Lemon and lactic acids",
        "100% essential oils of wormwood, sage, ylang-ylang",
      ],
      keyIngredients: [
        { name: "Wormwood", role: "detox", tone: "sage" },
        { name: "Sage (macerate)", role: "healing", tone: "sage" },
        { name: "Tansy", role: "toning", tone: "sage" },
        { name: "Emerald + pink clays", role: "cleansing", tone: "clay" },
        { name: "Flaxseed oil (Omega-3)", role: "renewal", tone: "honey" },
      ],
      profile: {
        scent: { label: "Mountain wormwood", intensity: 5 },
        lather: { label: "Rich creamy", strength: 4 },
        hardness: { label: "Hard", level: 4 },
        skinType: "Problematic · oily · combination",
      },
    },
    status: "ready",
  },

  /* ── 7 ── Соляне ──────────────────────────────────────────────────────── */
  {
    id: 7,
    slug: "salt",
    name: "Соляне",
    category: "regular",
    price: "130 грн / 100г",
    description:
      "SPA-ефект у кожному шматочку. Морська сіль, олія абрикосової кісточки та ефірні олії евкаліпту, розмарину й ладану — детокс, тонізування та глибоке очищення.",
    tagline: "коли треба прокинутись",
    profile: {
      scent: { label: "Морський бриз (евкаліпт, розмарин)", intensity: 4 },
      lather: { label: "Щільна шовковиста", strength: 5 },
      hardness: { label: "Дуже тверде", level: 5 },
      skinType: "Жирна · комбінована · з акне",
    },
    keyIngredients: [
      { name: "Морська сіль", role: "пілінг", tone: "clay" },
      { name: "Олія абрикосу (пережир)", role: "живлення", tone: "honey" },
      { name: "Ефірна олія евкаліпту", role: "тонус", tone: "sage" },
      { name: "Ефірна олія розмарину", role: "антисептик", tone: "sage" },
    ],
    masterNote:
      "Морська сіль дрібного помелу — справжній мінеральний пілінг, але ніжний. Евкаліпт і розмарин буквально прокидаються разом з вами. Беру його в понеділки; квіткове залишаю на п'ятницю.",
    detailedDescription:
      "Створене вручну «з нуля» холодним способом, «Соляне» утворює густу, щільну та шовковисту кремову піну, яка делікатно очищує і дарує шкірі відчуття абсолютної свіжості та тонусу, як після купання в морі.\n\n## SPA-ефект та ароматерапія\nКомпозиція 100% ефірних олій евкаліпту, розмарину та ладану створює глибокий, чистий, смолисто-пряний аромат із легким прохолодним відтінком. Цей бленд тонізує, знімає втому, освіжає думки та допомагає розслабитися після важкого дня.\n\n## Глибоке очищення та детокс\nМорська сіль дрібного помелу працює як мʼякий мінеральний пілінг — ніжно відлущує ороговілі клітини, виводить токсини, очищує та звужує пори, стимулює оновлення шкіри.\n\n## Ніжний догляд\nОлія абрикосової кісточки у пережирі не омилюється і залишається у милі в чистому вигляді, глибоко живлячи та захищаючи шкіру від пересушування.\n\n## Антисептичний баланс\n100% ефірні олії розмарину та евкаліпту мають потужні протизапальні та антибактеріальні властивості, допомагають нормалізувати роботу сальних залоз.",
    image: asset("soap-salty-1.jpg"),
    additionalImages: [asset("soap-salty-2.jpg")],
    ingredients: [
      "Оливкова, кокосова, пальмова, рицинова олії",
      "Олія абрикосової кісточки",
      "Морська сіль",
      "100% ефірні олії евкаліпту, розмарину та ладану",
    ],
    benefits: [
      "Глибоке очищення та детокс (морська сіль)",
      "Мʼякий мінеральний пілінг, звуження пор",
      "Регуляція себуму та антисептична дія",
      "Тонізування та SPA-ефект",
      "Живлення та захист від пересушування (абрикосова олія)",
      "Ароматерапія: знімає втому, освіжає думки",
    ],
    en: {
      name: "Salt",
      tagline: "when you need to wake up",
      description: "SPA effect in every bar. Sea salt, apricot kernel oil and essential oils of eucalyptus, rosemary and frankincense — detox, toning and deep cleansing.",
      masterNote: "Fine-ground sea salt — a real mineral scrub, but a gentle one. Eucalyptus and rosemary literally wake up with you. I reach for this one on Mondays; the floral one I save for Fridays.",
      detailedDescription: "Handcrafted from scratch by cold process, Salt soap creates a thick, dense and silky creamy lather that gently cleanses and gives the skin a feeling of absolute freshness and tone — like bathing in the sea.\n\n## SPA effect and aromatherapy\nThe composition of 100% essential oils of eucalyptus, rosemary and frankincense creates a deep, clean, resinous-spicy scent with a light cool note. This blend tones, relieves fatigue, refreshes the mind and helps relax after a hard day.\n\n## Deep cleansing and detox\nFine sea salt works as a gentle mineral scrub — delicately exfoliates dead cells, draws out toxins, cleanses and tightens pores, and stimulates skin renewal.\n\n## Gentle care\nApricot kernel oil in the superfat does not saponify and remains in the soap in pure form, deeply nourishing and protecting the skin from drying.\n\n## Antiseptic balance\n100% essential oils of rosemary and eucalyptus have powerful anti-inflammatory and antibacterial properties, and help normalise sebaceous gland activity.",
      benefits: [
        "Deep cleansing and detox (sea salt)",
        "Gentle mineral scrub, tightened pores",
        "Sebum regulation and antiseptic action",
        "Toning and SPA effect",
        "Nourishment and protection from drying (apricot oil)",
        "Aromatherapy: relieves fatigue, refreshes the mind",
      ],
      ingredients: [
        "Olive, coconut, palm, castor oils",
        "Apricot kernel oil",
        "Sea salt",
        "100% essential oils of eucalyptus, rosemary and frankincense",
      ],
      keyIngredients: [
        { name: "Sea salt", role: "scrub", tone: "clay" },
        { name: "Apricot oil (superfat)", role: "nourishment", tone: "honey" },
        { name: "Eucalyptus essential oil", role: "toning", tone: "sage" },
        { name: "Rosemary essential oil", role: "antiseptic", tone: "sage" },
      ],
      profile: {
        scent: { label: "Sea breeze (eucalyptus, rosemary)", intensity: 4 },
        lather: { label: "Dense silky", strength: 5 },
        hardness: { label: "Very hard", level: 5 },
        skinType: "Oily · combination · acne-prone",
      },
    },
    status: "ready",
  },

  /* ── 8 ── Трояндове ───────────────────────────────────────────────────── */
  {
    id: 8,
    slug: "rose",
    name: "Трояндове",
    category: "regular",
    price: "200 грн / 100г",
    description:
      "Делікатний ритуал краси з ароматом троянди. Мацерат та 100% ефірна олія троянди, рожева глина — зволоження, тонізація та антивіковий догляд.",
    tagline: "для особливих моментів",
    profile: {
      scent: { label: "Чайна троянда", intensity: 4 },
      lather: { label: "Шовковиста кремова", strength: 4 },
      hardness: { label: "Середня", level: 3 },
      skinType: "Усі типи · суха · зріла",
    },
    keyIngredients: [
      { name: "Мацерат троянди", role: "відновлення", tone: "rose" },
      { name: "Рожева глина", role: "тонізування", tone: "rose" },
      { name: "Молочна кислота", role: "зволоження", tone: "neutral" },
      { name: "Ефірна олія троянди", role: "ароматерапія", tone: "rose" },
    ],
    masterNote:
      "Ефірна олія троянди — найдорожча в майстерні, і нічим схожим її не замінити. Але не тільки в ній річ: мацерат пелюсток на оливковій олії і рожева глина дають реальний догляд, а не лише гарний аромат.",
    detailedDescription:
      "Мило «Трояндове» створено вручну виключно з рослинних олій за традиційною холодною технологією. Визрівало понад 6 тижнів, щоб зберегти всю користь та силу природних компонентів. Має шовковисту, кремову пінку, яка делікатно очищує шкіру, не залишаючи відчуття стягнутості чи сухості.\n\n## Як працює\nМацерат троянди — унікальний настій пелюсток троянди на оливковій олії, насичує мило антиоксидантами, заспокоює подразнення та покращує еластичність шкіри.\n\nРожева глина делікатно ексфоліює, очищує пори, вирівнює тон обличчя та надає милу ніжний природний пастельний відтінок.\n\nМолочна кислота утворює лактат натрію — потужний природний зволожувач, що робить мило ще мʼякшим, а шкіру — оксамитовою.\n\nОливкова, кокосова та пальмова олії створюють ідеальний баланс: глибоке зволоження, живлення та стійка, густа піна. Рицинова олія додає піні особливої ніжності та кремової текстури.\n\n## Аромат і ритуал\nЕфірна олія троянди огортає тонким, благородним ароматом, який гармонізує емоційний стан, знімає напругу та дарує відчуття гармонії.",
    image: asset("soap-rose-1.jpg"),
    additionalImages: [asset("soap-rose-3.jpg")],
    videoUrl: asset("soap-rose.mp4"),
    ingredients: [
      "Оливкова, кокосова, пальмова, рицинова олії",
      "Мацерат троянди",
      "Рожева глина",
      "Молочна кислота",
      "100% ефірна олія троянди",
    ],
    benefits: [
      "Глибоке зволоження та антивіковий догляд",
      "Тонізування та вирівнювання тону (рожева глина)",
      "Делікатна ексфоліація та очищення пор",
      "Відновлення еластичності шкіри (мацерат троянди)",
      "Ароматерапія: гармонізує, знімає напругу",
      "Підходить для всіх типів, особливо для сухої та зрілої",
    ],
    en: {
      name: "Rose",
      tagline: "for special moments",
      description: "A delicate beauty ritual with the scent of rose. Rose macerate and 100% rose essential oil, pink clay — hydration, toning and anti-ageing care.",
      masterNote: "Rose essential oil is the most expensive in the workshop, and there's no substitute. But it's not only about that: rose petal macerate in olive oil and pink clay provide real care, not just a beautiful scent.",
      detailedDescription: "«Rose» soap is made entirely from plant oils using the traditional cold process. It cured for over 6 weeks to preserve all the benefits and power of the natural components. It has a silky, creamy lather that delicately cleanses without leaving a feeling of tightness or dryness.\n\n## How it works\nRose macerate — a unique infusion of rose petals in olive oil — saturates the soap with antioxidants, soothes irritation and improves skin elasticity.\n\nPink clay delicately exfoliates, cleanses pores, evens skin tone and gives the soap its gentle natural pastel hue.\n\nLactic acid forms sodium lactate — a powerful natural humectant that makes the soap even softer and the skin velvety.\n\nOlive, coconut and palm oils create the ideal balance: deep hydration, nourishment and a lasting, rich lather. Castor oil adds special tenderness and a creamy texture to the lather.\n\n## Scent and ritual\nRose essential oil wraps in a fine, noble fragrance that harmonises the emotional state, relieves tension and brings a sense of inner calm.",
      benefits: [
        "Deep hydration and anti-ageing care",
        "Toning and tone-evening (pink clay)",
        "Delicate exfoliation and pore cleansing",
        "Restores skin elasticity (rose macerate)",
        "Aromatherapy: harmonises, relieves tension",
        "Suitable for all types, especially dry and mature",
      ],
      ingredients: [
        "Olive, coconut, palm, castor oils",
        "Rose macerate",
        "Pink clay",
        "Lactic acid",
        "100% rose essential oil",
      ],
      keyIngredients: [
        { name: "Rose macerate", role: "renewal", tone: "rose" },
        { name: "Pink clay", role: "toning", tone: "rose" },
        { name: "Lactic acid", role: "hydration", tone: "neutral" },
        { name: "Rose essential oil", role: "aromatherapy", tone: "rose" },
      ],
      profile: {
        scent: { label: "Tea rose", intensity: 4 },
        lather: { label: "Silky creamy", strength: 4 },
        hardness: { label: "Medium", level: 3 },
        skinType: "All types · dry · mature",
      },
    },
    status: "ready",
  },

  /* ── 9 ── Квіткове ────────────────────────────────────────────────────── */
  {
    id: 9,
    slug: "floral",
    name: "Квіткове",
    category: "regular",
    price: "200 грн / 100г",
    description:
      "Вишукане квіткове мило для щоденного ритуалу. Олії обліпихи та абрикосу, смарагдова глина, ефірні олії нарциса та франжипані — живлення та здорове сяйво.",
    tagline: "ранок, який починається з ритуалу",
    profile: {
      scent: { label: "Розквітлий сад (нарцис, франжипані)", intensity: 5 },
      lather: { label: "Густа кремова", strength: 4 },
      hardness: { label: "Середня", level: 3 },
      skinType: "Усі типи · нормальна",
    },
    keyIngredients: [
      { name: "Олія обліпихи (пережир)", role: "живлення", tone: "honey" },
      { name: "Олія абрикосу (пережир)", role: "мʼякість", tone: "honey" },
      { name: "Смарагдова глина", role: "тонус", tone: "clay" },
      { name: "Ефірні олії нарциса, франжипані", role: "аромат", tone: "rose" },
    ],
    masterNote:
      "Обліпиха і абрикос у пережирі — вони не омилилися, а лишилися в милі як активний крем для шкіри. Аромат нарциса і франжипані — єдина композиція, де я не економлю ні на грамі, бо ранковий ритуал заслуговує на справжній запах.",
    detailedDescription:
      "Натуральне мило «Квіткове» — справжня розкіш догляду з рослинних олій та природних компонентів. Базова формула на основі оливкової, кокосової, пальмової та рицинової олій створює густу, кремову та неймовірно ніжну пінку, яка мʼяко очищує, не пересушуючи шкіру.\n\n## Як працює\nОлія абрикосової кісточки та обліпихи (пережир) — інтенсивно живлять, помʼякшують, насичують шкіру вітамінами та дарують здорове, ніжне сяйво. Вони додані наприкінці процесу, тому не вступили в реакцію з лугом і працюють як активний крем.\n\nСмарагдова глина делікатно детоксикує, тонізує та мʼяко вирівнює рельєф шкіри.\n\nЛимонна та молочна кислоти дарують милу кондиціонуючий ефект, роблячи шкіру гладкою та шовковистою.\n\n## Аромат і ритуал\n100% ефірні олії нарциса та франжипані створюють витончений, глибокий квітковий аромат, що перетворює звичайне вмивання на вишуканий ритуал ароматерапії.\n\n## Як виготовлене\nХолодний спосіб та тривале визрівання (понад 6 тижнів) зберігають максимум користі природних компонентів. Без синтетичних барвників, штучних ароматизаторів, парабенів та агресивних ПАР.",
    image: asset("soap-floral-1.jpg"),
    additionalImages: [asset("soap-floral-3.jpg")],
    videoUrl: asset("soap-floral.mp4"),
    ingredients: [
      "Оливкова, кокосова, пальмова, рицинова олії",
      "Олія абрикосової кісточки",
      "Олія обліпихи",
      "Смарагдова глина",
      "Лимонна та молочна кислоти",
      "100% ефірні олії нарциса та франжипані",
    ],
    benefits: [
      "Глибоке живлення та зволоження (обліпиха, абрикос)",
      "Делікатний детокс та тонізування (смарагдова глина)",
      "Кондиціонуючий ефект, шовковиста текстура",
      "Відновлення здорового сяйва шкіри",
      "Ароматерапія: вишуканий квітковий аромат",
      "Підходить для щоденного догляду за тілом та обличчям",
    ],
    en: {
      name: "Floral",
      tagline: "a morning that begins with a ritual",
      description: "An exquisite floral soap for a daily ritual. Sea buckthorn and apricot oils, emerald clay, essential oils of narcissus and frangipani — nourishment and a healthy glow.",
      masterNote: "Sea buckthorn and apricot in the superfat — they didn't saponify; they stayed in the soap as an active cream for the skin. The scent of narcissus and frangipani is the one blend where I never spare a gram, because a morning ritual deserves a genuine fragrance.",
      detailedDescription: "«Floral» natural soap — true luxury care from plant oils and natural ingredients. The base formula of olive, coconut, palm and castor oils creates a thick, creamy and incredibly gentle lather that softly cleanses without drying the skin.\n\n## How it works\nApricot kernel and sea buckthorn oils (superfat) — intensively nourish, soften, saturate the skin with vitamins and bestow a healthy, gentle glow. Added at the end of the process, they did not react with the lye and work as an active cream.\n\nEmerald clay gently detoxes, tones and delicately evens skin texture.\n\nLemon and lactic acids give the soap a conditioning effect, making skin smooth and silky.\n\n## Scent and ritual\n100% essential oils of narcissus and frangipani create an exquisite, deep floral scent that turns a simple wash into a refined aromatherapy ritual.\n\n## How it is made\nCold process and long curing (over 6 weeks) preserve the maximum benefit of the natural components. No synthetic dyes, artificial fragrances, parabens or aggressive surfactants.",
      benefits: [
        "Deep nourishment and hydration (sea buckthorn, apricot)",
        "Gentle detox and toning (emerald clay)",
        "Conditioning effect, silky texture",
        "Restores healthy skin glow",
        "Aromatherapy: exquisite floral scent",
        "Suitable for daily face and body care",
      ],
      ingredients: [
        "Olive, coconut, palm, castor oils",
        "Apricot kernel oil",
        "Sea buckthorn oil",
        "Emerald clay",
        "Lemon and lactic acids",
        "100% essential oils of narcissus and frangipani",
      ],
      keyIngredients: [
        { name: "Sea buckthorn oil (superfat)", role: "nourishment", tone: "honey" },
        { name: "Apricot oil (superfat)", role: "softness", tone: "honey" },
        { name: "Emerald clay", role: "toning", tone: "clay" },
        { name: "Narcissus & frangipani oils", role: "scent", tone: "rose" },
      ],
      profile: {
        scent: { label: "Blooming garden (narcissus, frangipani)", intensity: 5 },
        lather: { label: "Rich creamy", strength: 4 },
        hardness: { label: "Medium", level: 3 },
        skinType: "All types · normal",
      },
    },
    status: "ready",
  },

  /* ── 10 ── Полуничне (з подорожником) ────────────────────────────────── */
  {
    id: 10,
    slug: "strawberry",
    name: "Полуничне (з подорожником)",
    category: "regular",
    price: "200 грн / 100г",
    description:
      "Ніжне мило-скраб із подорожником. Смарагдова глина, борошно листя подорожника, олії абрикосу та виноградної кісточки — очищення, ексфоліація та живлення.",
    tagline: "завжди літо під рукою",
    profile: {
      scent: { label: "Літня полуниця", intensity: 4 },
      lather: { label: "Густа кремова", strength: 4 },
      hardness: { label: "Середня", level: 3 },
      skinType: "Усі типи · комбінована",
    },
    keyIngredients: [
      { name: "Борошно подорожника", role: "скраб", tone: "sage" },
      { name: "Смарагдова глина", role: "очищення", tone: "clay" },
      { name: "Олія абрикосу (пережир)", role: "живлення", tone: "honey" },
      { name: "Олія виноградної кісточки", role: "пружність", tone: "sage" },
    ],
    masterNote:
      "Борошно подорожника — найм'якший скраб, який я знаю: не дере, але реально відлущує. Смарагдова глина робить решту. Аромат полуниці — і ось вже не субота вдома, а справжнє літо. Кладу в сумку і беру скрізь.",
    detailedDescription:
      "Мило «Полуничне з подорожником» — збалансоване поєднання делікатного очищення та активного догляду, виготовлене «з нуля» холодним способом.\n\n## Як працює\nГуста, кремова піна завдяки кокосовій, пальмовій та рициновій оліям — оливкова олія забезпечує мʼякість дії.\n\nСмарагдова глина лагідно очищує пори, а борошно з листя подорожника виступає як надмʼякий природний скраб, що стимулює оновлення шкіри.\n\nОлії абрикосової та виноградної кісточок (пережир) додані наприкінці процесу — не вступили в реакцію з лугом і працюють як активний крем: зволожують, повертають пружність та еластичність.\n\nЛимонна та молочна кислоти утворюють цитрат та лактат натрію, помʼякшують жорстку воду та дарують милу кондиціонуючий ефект.\n\n## Аромат і ритуал\nАромат полуниці дарує чарівний фруктовий настрій, ефірна олія пачулі додає глибину та земляну нотку.\n\n## Тонкощі догляду\nПідходить для всіх типів шкіри — смарагдова глина та подорожник ідеально очищують комбіновану й масну шкіру, а пережир захищає суху та чутливу від пересушування.",
    image: asset("soap-strawberry-1.jpg"),
    additionalImages: [asset("soap-strawberry-2.jpg")],
    videoUrl: asset("soap-strawberry.mp4"),
    ingredients: [
      "Кокосова, оливкова, пальмова, рицинова олії",
      "Олія абрикосової кісточки",
      "Олія виноградної кісточки",
      "Смарагдова глина",
      "Борошно листя подорожника",
      "Лимонна та молочна кислоти",
      "Аромат полуниці, 100% ефірна олія пачулі",
    ],
    benefits: [
      "Ніжне очищення, густа кремова піна",
      "Детокс та ексфоліація (смарагдова глина, подорожник)",
      "Інтенсивне живлення пережиром (абрикос, виноградна кісточка)",
      "Шовковистість та кондиціонуючий ефект (кислоти)",
      "Підходить для всіх типів шкіри",
      "Чарівний фруктовий аромат",
    ],
    en: {
      name: "Strawberry",
      tagline: "summer in your hands, always",
      description: "Gentle scrub soap with plantain. Emerald clay, plantain leaf powder, apricot and grapeseed oils — cleansing, exfoliation and nourishment.",
      masterNote: "Plantain flour is the gentlest scrub I know: it doesn't scratch, but it really does exfoliate. Emerald clay does the rest. The strawberry scent — and suddenly it's not Saturday at home, it's real summer. I throw it in my bag and take it everywhere.",
      detailedDescription: "«Strawberry with Plantain» soap — a balanced combination of delicate cleansing and active care, made from scratch by cold process.\n\n## How it works\nThick, creamy lather thanks to coconut, palm and castor oils — olive oil provides gentleness.\n\nEmerald clay gently cleanses pores, while plantain leaf powder acts as an ultra-soft natural scrub, stimulating skin renewal.\n\nApricot and grapeseed oils (superfat) were added at the end of the process — they did not react with the lye and work as an active cream: moisturise, restore elasticity and suppleness.\n\nLemon and lactic acids form sodium citrate and sodium lactate, soften hard water and give the soap a conditioning effect.\n\n## Scent and ritual\nThe strawberry fragrance brings a magical fruity mood; patchouli essential oil adds depth and an earthy note.\n\n## Care tips\nSuitable for all skin types — emerald clay and plantain cleanse combination and oily skin perfectly, while the superfat protects dry and sensitive from drying.",
      benefits: [
        "Gentle cleansing, thick creamy lather",
        "Detox and exfoliation (emerald clay, plantain)",
        "Intensive nourishment via superfat (apricot, grapeseed)",
        "Silky, conditioning effect (acids)",
        "Suitable for all skin types",
        "Magical fruity fragrance",
      ],
      ingredients: [
        "Coconut, olive, palm, castor oils",
        "Apricot kernel oil",
        "Grapeseed oil",
        "Emerald clay",
        "Plantain leaf powder",
        "Lemon and lactic acids",
        "Strawberry fragrance, 100% patchouli essential oil",
      ],
      keyIngredients: [
        { name: "Plantain leaf powder", role: "scrub", tone: "sage" },
        { name: "Emerald clay", role: "cleansing", tone: "clay" },
        { name: "Apricot oil (superfat)", role: "nourishment", tone: "honey" },
        { name: "Grapeseed oil", role: "elasticity", tone: "sage" },
      ],
      profile: {
        scent: { label: "Summer strawberry", intensity: 4 },
        lather: { label: "Rich creamy", strength: 4 },
        hardness: { label: "Medium", level: 3 },
        skinType: "All types · combination",
      },
    },
    status: "ready",
  },

  /* ── 11 ── Набори ─────────────────────────────────────────────────────── */
  {
    id: 11,
    slug: "sets",
    name: "Набори",
    category: "sets",
    price: "від 500 грн",
    description: "Дегустаційні набори або подарункові комплекти.",
    tagline: "підібрати для когось особливого",
    masterNote:
      "Збираю під кожне замовлення вручну — підкажіть, для кого і для якого настрою, і знайду правильний баланс брусків.",
    detailedDescription:
      "Спеціально підібрані комбінації мого мила у красивій екологічній упаковці. Ідеальний подарунок для близьких. Доступні дегустаційні набори (міні-бруски 4-6 видів) та повноцінні подарункові комплекти. Можливість індивідуального підбору складу набору.",
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
    en: {
      name: "Gift Sets",
      tagline: "for someone special",
      description: "Tasting sets or gift collections. Assembled by hand for every order.",
      masterNote: "I assemble each one by hand per order — tell me who it's for and what mood, and I'll find the right balance of bars.",
      detailedDescription: "Specially curated combinations of my soaps in beautiful eco-friendly packaging. The perfect gift for your loved ones. Available as tasting sets (mini bars, 4–6 varieties) and full gift collections. Individual composition can be customised.",
      benefits: [
        "Ready-made gift",
        "Beautiful packaging",
        "A chance to try different varieties",
        "Save up to 15% compared to buying individually",
        "Custom composition",
      ],
    },
    status: "ready",
  },
];
