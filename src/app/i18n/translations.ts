export const translations = {
  uk: {
    // Nav
    nav_artisan: "Майстриня",
    nav_catalogue: "Каталог",
    nav_about: "Про майстерню",
    nav_reviews: "Відгуки",
    nav_order: "Замовити",
    nav_menu_aria: "Меню",
    logo_aria: "VS Soap — на початок",

    // Hero
    hero_badge:
      "Трави з Черкащини · Природні барвники · Натуральні ефірні олії",
    hero_h1_1: "Створюю мило",
    hero_h1_2: "із",
    hero_h1_em: "власноруч",
    hero_h1_3: "зібраних трав",
    hero_tagline:
      "Холодне омилення. Витримка від 6 тижнів до 6 місяців. Турбота про Ваше здоровʼя та красу.",
    hero_cta_browse: "Переглянути вироби",
    hero_cta_order: "Як замовити",
    hero_scroll: "Гортайте",
    hero_scroll_aria: "Гортати вниз",

    // Founder
    founder_p1:
      'Кілька років тому я відчула потребу зупинити шалений біг і зазирнути вглиб себе, повернутися до першоджерел, до того, що є справжнім і вічним. Створення мила з нуля саме холодним способом стало моїм особистим "поверненням додому". Для мене це про глибоку мудрість природи та повагу до її часу. Тут немає суєти чи термічного насилля над інгредієнтами. Олії та трави не варяться, вони зберігають свою первісну, ЖИВУ силу і дозрівають тижнями. Це мило народжується в спокої, тому воно й саме наче живий організм, наповнений цілющою цінністю.',
    founder_p2:
      "Моя майстерня - це сакральний простір, де жіноча енергія поєднується із силою природи. Коли я беру до рук чисті рослинні олії, цілющі трави, глини та 100% ефірні олії, то ніби торкаюся самої суті життя. Холодний процес — це дивовижне таїнство. Тут немає зовнішнього підігріву. Усе тепло, вся енергія для народження мила йде зсередини, із взаємодії самих компонентів. Це стало для мене головним духовним уроком: усе найцінніше для нашої трансформації вже закладено всередині нас, потрібно лише створити умови та дати цьому час і простір.",
    founder_p3:
      "Земля вже дала нам усе найкраще для здоровʼя та гармонії. Через своє крафтове мило я передаю вам не просто засіб для догляду, а частинку спокою, заземлення та любові, з якою створювалася кожна партія.",
    founder_signature: "З любовʼю, ВелеСлава",
    founder_title: "засновниця",
    founder_img_alt: "Тетяна, засновниця VS Soap",

    // ProductGrid
    products_label: "Каталог",
    products_h2: "Моє крафтове мило",
    products_subtitle:
      "Кожен брусок створений виключно з натуральних інгредієнтів",
    products_sort_price: "За ціною",

    // ProductCard
    card_scent: "Аромат",
    card_lather: "Піна",
    card_hardness: "Твердість",
    card_skintype: "Для шкіри",
    card_curing: "Дозріває",
    card_curing_until: (date: string) => `Дозріває до ${date}`,
    card_ready: "Готове",
    card_details: "Детальніше",

    // ProductModal
    modal_prev: "Попередній",
    modal_next: "Наступний",
    modal_close: "Закрити",
    modal_share: "Поділитись",
    modal_copy_link_title: "Скопіювати посилання",
    modal_copied: "Посилання скопійовано:",
    modal_copy_hint: "Скопіюйте посилання:",
    modal_from_workshop: "З майстерні",
    modal_benefits: "Переваги",
    modal_key_ingredients: "Головні компоненти",
    modal_full_ingredients: "Повний склад",
    modal_curing_until: (date: string) =>
      `Дозріває до ${date} · можна забронювати`,
    modal_curing: "Зараз дозріває · можна забронювати",
    modal_availability: "Наявність уточнюйте",
    modal_order_btn: (name: string) => `Хочу замовити «${name}»`,
    modal_nav_hint: "← → для перегляду інших видів мила",
    modal_contacts: "Наші контакти:",
    modal_wa_title: "WhatsApp",
    modal_viber_title: "Viber — повідомлення скопійоване",
    modal_ig_title: "Instagram — повідомлення скопійоване",
    modal_order_msg: (name: string) =>
      `Доброго дня! Хочу замовити мило «${name}». Підкажіть, будь ласка, деталі.`,

    // Process
    process_label: "Як це народжується",
    process_h2_1: "Від олії до бруска —",
    process_h2_2: "від 6 тижнів.",
    process_subtitle:
      "Промислове мило роблять за 4 години. Моє — мінімум 42 дні. Різниця в тому, що залишається всередині.",
    process_step: "Крок",
    process_steps: [
      {
        step: "Крок 1",
        time: "Тиждень 1",
        title: "збираю та готую",
        body: "Підбираю олії, відмірюю до грама, готую мацерати трав. З лугом обережно, то ж, як годиться, — окуляри, рукавички, віконце відчинене.",
      },
      {
        step: "Крок 2",
        time: "Тиждень 1",
        title: "змішую та заливаю",
        body: "Олії та лужний розчин зʼєднуються при кімнатній температурі — це і є «холодне омилення». Додаю ефірки, глини, виливаю у форми.",
      },
      {
        step: "Крок 3",
        time: "Тиждень 2",
        title: "ріжу та підрівнюю краї",
        body: "Через 24 години ріжу на бруски — у цей момент ще можна пальцем продавити. А щоб мило було охайним, підрівнюю кожен бік.",
      },
      {
        step: "Крок 4",
        time: "Тиждень 6 – 6 міс.",
        title: "дозріває та йде до вас",
        body: "Бруски лежать на полицях, втрачають вологу, стають твердими. Алепське визріває по 6+ місяців. Готові — пакую в крафт і відправляю.",
      },
    ],

    // About
    about_label: "Майстерня",
    about_h2: "Про майстерню",
    about_subtitle:
      "Мистецтво, що зцілює шкіру та турбується про ваше здоровʼя",
    about_acc1_title: "Суть нашого ремесла",
    about_acc1_summary:
      "Ми не «варимо» мило — ми створюємо його за автентичною технологією холодного омилення, зберігаючи живильні властивості олії.",
    about_acc1_p1:
      "Це процес, де природа і хімія зустрічаються без поспіху. Ми поєднуємо рослинні олії та лужний розчин за кімнатної температури, щоб зберегти вітаміни і живильну молекулу, подаровану землею.",
    about_acc1_p2:
      "Чому наш «холодний спосіб» — це магія? На відміну від промислового мила, ми не вилучаємо гліцерин. Він залишається всередині, створюючи на шкірі невидимий захисний барʼєр.",
    about_acc1_p3:
      "Олії (ши, какао, оливкова, кокосова, пальмова, мигдальна, жожоба, абрикосових кісточок, обліпихова та інші), мацерати (оливкова олія, настояна на травах та квітах), відвари трав та екстракти квітів не піддаються кипʼятінню — ваша шкіра отримує порцію доглядових олій, що не змилися в процесі реакції, та комплекс поживних речовин.",
    about_acc2_title: "Витримка від 6 тижнів до 6 місяців",
    about_acc2_summary:
      "Кожен брусок «дозріває» понад місяць у спеціальних умовах.",
    about_acc2_body:
      "За цей час він стає твердим, ніжним та безпечним — як витримане вино. Тільки після повного дозрівання мило потрапляє до вас.",
    about_acc3_title: "Наші принципи — чистота у всьому",
    about_acc3_summary:
      "Жодних промислових ПАРів (SLS), парабенів чи штучних піноутворювачів — тільки натуральне.",
    about_acc3_p1:
      "Ми фарбуємо мило глинами, травами та спеціями. Аромат дарують лише 100% чисті ефірні олії, а не дешеві віддушки.",
    about_acc3_p2:
      "Ми дбаємо про планету так само, як про ваше тіло. Наше пакування — це папір, джут, натуральна деревина і жодного грама пластику.",
    about_acc4_title: "Для кого ми створюємо?",
    about_acc4_summary:
      "Для тих, хто стомився від хімії та хоче справжнього догляду — простого, чистого, природного.",
    about_acc4_items: [
      "стомився від відчуття стягнутості шкіри після душу;",
      "має чутливу шкіру і розуміє, що справжнє зволоження починається з дбайливого очищення без синтетичних ПАР;",
      "цінує естетику в деталях, перетворює звичайне миття рук на маленький ритуал любові до себе і обирає свідоме споживання;",
      "читає склад раніше, ніж назву і обирає безпеку для своєї шкіри та планети;",
      "прагне жити в гармонії з природою, відмовляючись від зайвої хімії на користь чистих рослинних олій;",
      "цінує чесність складу: лише омилені олії, глини, трави, ефірні екстракти — лише те, що дає природа;",
      "бачить не просто форму, а відчуває душу;",
      "обирає справжнє замість штучного, цінує здоровʼя своєї шкіри та вірить, що розкіш криється у простоті та натуральності.",
    ],
    about_acc4_closing:
      "Наше творіння — це гігієна та ритуал любові до себе, втілений у шматочку шовковистої піни. Кожен брусок мила — унікальна композиція, новий спа досвід.",

    // WhyNatural
    why_label: "Мій підхід",
    why_h2: "Чому натуральна косметика?",
    why_subtitle:
      "Наша шкіра — це живий орган, який потребує бережного догляду. Натуральне мило — це не просто засіб гігієни, а турбота про здоровʼя.",
    why_manifesto_intro: "У кожен брусочок я закладаю три важливі сенси:",
    why_manifesto_items: [
      {
        label: "Абсолютна натуральність",
        text: "Довіряю тому, що створила Земля — використовую якісні живі олії, глини, лікарські рослини та мацерати, зібрані та зроблені власноруч, 100% ефірні олії, лише природні барвники.",
      },
      {
        label: "Природна унікальність",
        text: "У природі немає двох однакових листків чи квіток — так само кожна партія мого мила має свій неповторний мармуровий візерунок, свій характер і свій відтінок.",
      },
      {
        label: "Глибока справжність",
        text: "Наше життя перенасичене штучними замінниками — від їжі до емоцій. Справжнє мило повертає до тактильної та візуальної правди: воно чесне, адже дихає природою.",
      },
    ],
    why_manifesto_p:
      "Створення рецепта схоже на медитацію, де кожна олія, кожен компонент обирається не випадково, а для гармонії всього ансамблю. А далі починається довге очікування — від 6 тижнів до 6 місяців залежно від сорту, поки мило зріє та набирає сили.",
    why_manifesto_italic:
      "Це мій маніфест любові та прийняття. Бережно очищаю шкіру — разом з цим змиваю чужі очікування, маски й стрес. Залишаюся лише я справжня, природна, красива у своїй унікальності. Кремова піна не пересушує, вона мʼяко огортає й підкреслює природну текстуру, даруючи шкірі спокій і свободу дихати.",
    why_benefits: [
      {
        title: "Холодне омилення",
        description:
          "Традиційна технологія виготовлення зберігає корисні властивості олій та екстрактів. Мило визріває 4-6 тижнів.",
      },
      {
        title: "Без хімії",
        description:
          "Ніяких SLS, парабенів, синтетичних барвників чи ароматизаторів. Тільки натуральні інгредієнти.",
      },
      {
        title: "Екологічно",
        description:
          "Біорозкладається повністю, не забруднює води. Упаковка з природних матеріалів.",
      },
      {
        title: "Для здоровʼя шкіри",
        description:
          "Зберігає природний ліпідний барʼєр шкіри, не пересушує, живить натуральним гліцерином.",
      },
    ],

    // Testimonials
    testimonials_label: "Відгуки",
    testimonials_h2: "Що кажуть покупці",
    testimonials_subtitle: "Реальні враження від справжніх людей",
    testimonials_social_text:
      "Відгуки наших покупців у переписках та соцмережах.",
    testimonials_social_label: "Пряма мова",
    testimonials_close: "Закрити",
    testimonials_video_badge: "Відео",
    testimonials_read_more: "Читати далі ▼",
    testimonials_collapse: "Згорнути ▲",
    testimonials_footer:
      "Усі відгуки — від реальних покупців. Фото та відео надіслані замовниками особисто.",
    testimonials_close_video_aria: "Закрити відео",
    testimonials_prev_aria: "Попередній відгук",
    testimonials_next_aria: "Наступний відгук",
    testimonials_open_social_aria: "Відкрити відгуки у соцмережах",
    testimonials_video_aria: (name: string) => `Переглянути відео від ${name}`,
    testimonials_social_alt: (n: number) => `Відгук у соцмережах ${n}`,
    testimonials_review_alt: (name: string) => `Відгук від ${name}`,

    // Contact
    contact_label: "Замовлення",
    contact_h2: "Як замовити",
    contact_body:
      "Замовлення приймаю через соціальні мережі або месенджери. Доставка по всій Україні Новою Поштою або Укрпоштою.",
    contact_discount:
      "Мінімальне замовлення — 2 бруски. При замовленні від 5 брусків — знижка 10%",
    contact_footer: "© 2026 VS Soap. Створено з любовʼю в Україні 🇺🇦",
  },

  en: {
    // Nav
    nav_artisan: "Artisan",
    nav_catalogue: "Catalogue",
    nav_about: "About",
    nav_reviews: "Reviews",
    nav_order: "Order",
    nav_menu_aria: "Menu",
    logo_aria: "VS Soap — to the top",

    // Hero
    hero_badge:
      "Herbs from the heart of Ukraine · Natural Dyes · Pure Essential Oils",
    hero_h1_1: "I craft soap",
    hero_h1_2: "from",
    hero_h1_em: "hand-picked",
    hero_h1_3: "wild herbs",
    hero_tagline:
      "Cold process. Cured 6 weeks to 6 months. Care for your skin and wellbeing.",
    hero_cta_browse: "Browse collection",
    hero_cta_order: "How to order",
    hero_scroll: "Scroll",
    hero_scroll_aria: "Scroll down",

    // Founder
    founder_p1:
      'A few years ago I felt the need to stop the frantic rush and look within — to return to the source, to what is true and lasting. Making soap from scratch using the cold-process method became my own "coming home". For me it speaks of nature\'s deep wisdom and respect for her timing. There is no haste here, no thermal violence inflicted on the ingredients. The oils and herbs are never boiled — they keep their original, LIVING force and cure for weeks. This soap is born in stillness, which is why it feels like a living thing, filled with healing value.',
    founder_p2:
      "My workshop is a sacred space where feminine energy meets the power of nature. When I take pure plant oils, healing herbs, clays and 100% essential oils in my hands, I feel I am touching the very essence of life. The cold process is a wondrous mystery. There is no external heat. All the warmth, all the energy needed to bring the soap to life comes from within — from the interaction of the ingredients themselves. This became my deepest spiritual lesson: everything most precious for our transformation is already within us; we only need to create the conditions and give it time and space.",
    founder_p3:
      "The Earth has already given us all we need for health and harmony. Through my craft soap I pass on to you not merely a skincare product, but a piece of the calm, groundedness, and love that went into every batch.",
    founder_signature: "With love, VeleSlava",
    founder_title: "founder",
    founder_img_alt: "Tetiana, founder of VS Soap",

    // ProductGrid
    products_label: "Catalogue",
    products_h2: "My Craft Soap",
    products_subtitle: "Every bar made exclusively from natural ingredients",
    products_sort_price: "By price",

    // ProductCard
    card_scent: "Scent",
    card_lather: "Lather",
    card_hardness: "Hardness",
    card_skintype: "Skin type",
    card_curing: "Curing",
    card_curing_until: (date: string) => `Curing until ${date}`,
    card_ready: "In stock",
    card_details: "View",

    // ProductModal
    modal_prev: "Previous",
    modal_next: "Next",
    modal_close: "Close",
    modal_share: "Share",
    modal_copy_link_title: "Copy link",
    modal_copied: "Link copied:",
    modal_copy_hint: "Copy this link:",
    modal_from_workshop: "From the workshop",
    modal_benefits: "Benefits",
    modal_key_ingredients: "Key ingredients",
    modal_full_ingredients: "Full ingredients",
    modal_curing_until: (date: string) =>
      `Curing until ${date} · can be reserved`,
    modal_curing: "Currently curing · can be reserved",
    modal_availability: "Contact us for availability",
    modal_order_btn: (name: string) => `I'd like to order "${name}"`,
    modal_nav_hint: "← → to browse other soaps",
    modal_contacts: "Contact us:",
    modal_wa_title: "WhatsApp",
    modal_viber_title: "Viber — message copied",
    modal_ig_title: "Instagram — message copied",
    modal_order_msg: (name: string) =>
      `Hello! I'd like to order the «${name}» soap. Could you please share the details?`,

    // Process
    process_label: "How it's born",
    process_h2_1: "From oil to bar —",
    process_h2_2: "at least 6 weeks.",
    process_subtitle:
      "Industrial soap is made in 4 hours. Mine takes a minimum of 42 days. The difference is in what stays inside.",
    process_step: "Step",
    process_steps: [
      {
        step: "Step 1",
        time: "Week 1",
        title: "gather & prepare",
        body: "I select the oils, weigh each gram, prepare herb macerates. Lye requires care — goggles, gloves, window open.",
      },
      {
        step: "Step 2",
        time: "Week 1",
        title: "mix & pour",
        body: "Oils and lye solution combine at room temperature — that's cold process. I add essential oils, clays, and pour into moulds.",
      },
      {
        step: "Step 3",
        time: "Week 2",
        title: "cut & trim",
        body: "After 24 hours I cut into bars — at this stage you can still press your finger in. Then I trim every edge.",
      },
      {
        step: "Step 4",
        time: "Week 6 – 6 mo.",
        title: "cure & ship",
        body: "Bars rest on shelves, losing moisture, becoming hard. Aleppo cures 6+ months. When ready — wrapped in kraft and shipped.",
      },
    ],

    // About
    about_label: "Workshop",
    about_h2: "About the Workshop",
    about_subtitle: "The art that heals skin and cares for your wellbeing",
    about_acc1_title: "The essence of our craft",
    about_acc1_summary:
      "We don't «boil» soap — we create it using the authentic cold-process method, preserving the nourishing properties of the oils.",
    about_acc1_p1:
      "This is a process where nature and chemistry meet without haste. We combine plant oils and lye solution at room temperature to preserve the vitamins and the nourishing molecules gifted by the earth.",
    about_acc1_p2:
      "Why is our «cold process» magical? Unlike industrial soap, we do not extract the glycerin. It stays inside, creating an invisible protective barrier on the skin.",
    about_acc1_p3:
      "Oils (shea, cocoa, olive, coconut, palm, almond, jojoba, apricot kernel, sea buckthorn and more), macerates (olive oil infused with herbs and flowers), herbal decoctions and flower extracts are never boiled — your skin receives a dose of nourishing oils that did not saponify in the reaction, plus a complex of nutrients.",
    about_acc2_title: "Cured 6 weeks to 6 months",
    about_acc2_summary:
      "Every bar «ripens» for over a month under special conditions.",
    about_acc2_body:
      "During this time it becomes hard, gentle, and safe — like aged wine. Only after full maturation does the soap reach you.",
    about_acc3_title: "Our principles — purity in everything",
    about_acc3_summary:
      "No industrial surfactants (SLS), parabens or synthetic foaming agents — only the natural.",
    about_acc3_p1:
      "We colour the soap with clays, herbs and spices. Scent comes only from 100% pure essential oils, never from cheap synthetic fragrances.",
    about_acc3_p2:
      "We care for the planet just as we care for your body. Our packaging is paper, jute, natural wood — not a gram of plastic.",
    about_acc4_title: "Who do we create for?",
    about_acc4_summary:
      "For those tired of chemicals who want genuine care — simple, clean, natural.",
    about_acc4_items: [
      "tired of that tight feeling on skin after a shower;",
      "has sensitive skin and understands that real moisture starts with gentle cleansing free of synthetic surfactants;",
      "values aesthetics in the details, turns an ordinary hand-wash into a small self-love ritual and chooses conscious consumption;",
      "reads the ingredient list before the name, and chooses safety for their skin and the planet;",
      "aspires to live in harmony with nature, replacing unnecessary chemistry with pure plant oils;",
      "values ingredient honesty: only saponified oils, clays, herbs, essential extracts — only what nature gives;",
      "sees not just a shape, but feels a soul;",
      "chooses the real over the artificial, values their skin's health and believes luxury lies in simplicity and naturalness.",
    ],
    about_acc4_closing:
      "Our creation is hygiene and a self-love ritual embodied in a piece of silky lather. Every bar of soap — a unique composition, a new spa experience.",

    // WhyNatural
    why_label: "My approach",
    why_h2: "Why natural cosmetics?",
    why_subtitle:
      "Our skin is a living organ that deserves gentle care. Natural soap is not just a hygiene product — it is care for your health.",
    why_manifesto_intro: "Into every bar I put three essential values:",
    why_manifesto_items: [
      {
        label: "Absolute naturalness",
        text: "I trust what the Earth created — I use quality living oils, clays, medicinal plants and macerates gathered and made by hand, 100% essential oils, only natural colorants.",
      },
      {
        label: "Natural uniqueness",
        text: "In nature no two leaves or flowers are identical — just so, every batch of my soap has its own marbled pattern, its own character and hue.",
      },
      {
        label: "Deep authenticity",
        text: "Our lives are saturated with artificial substitutes — from food to emotions. Real soap returns us to tactile and visual truth: it is honest, for it breathes nature.",
      },
    ],
    why_manifesto_p:
      "Crafting a recipe feels like meditation, where each oil, each component is chosen not by chance but for the harmony of the whole. Then begins the long wait — from 6 weeks to 6 months depending on the variety, while the soap cures and gathers strength.",
    why_manifesto_italic:
      "This is my manifesto of love and acceptance. I gently cleanse the skin — and in doing so wash away others' expectations, masks, and stress. I remain my true self — natural, beautiful in my uniqueness. The creamy lather doesn't dry out; it softly wraps and accentuates natural texture, giving the skin peace and the freedom to breathe.",
    why_benefits: [
      {
        title: "Cold Process",
        description:
          "Traditional craft method that preserves the beneficial properties of oils and extracts. The soap cures for 4–6 weeks.",
      },
      {
        title: "No Chemicals",
        description:
          "No SLS, parabens, synthetic dyes or fragrances. Only natural ingredients.",
      },
      {
        title: "Eco-friendly",
        description:
          "Fully biodegradable, does not pollute waterways. Packaging from natural materials.",
      },
      {
        title: "Skin health",
        description:
          "Preserves the skin's natural lipid barrier, does not dry out, nourishes with natural glycerin.",
      },
    ],

    // Testimonials
    testimonials_label: "Reviews",
    testimonials_h2: "What customers say",
    testimonials_subtitle: "Real impressions from real people",
    testimonials_social_text:
      "Reviews from our customers in messages and on social media.",
    testimonials_social_label: "Their words",
    testimonials_close: "Close",
    testimonials_video_badge: "Video",
    testimonials_read_more: "Read more ▼",
    testimonials_collapse: "Show less ▲",
    testimonials_footer:
      "All reviews are from verified customers. Photos and videos sent by the buyers themselves.",
    testimonials_close_video_aria: "Close video",
    testimonials_prev_aria: "Previous review",
    testimonials_next_aria: "Next review",
    testimonials_open_social_aria: "Open social media reviews",
    testimonials_video_aria: (name: string) => `Watch video from ${name}`,
    testimonials_social_alt: (n: number) => `Social review ${n}`,
    testimonials_review_alt: (name: string) => `Review from ${name}`,

    // Contact
    contact_label: "Order",
    contact_h2: "How to order",
    contact_body:
      "Orders via social media or messengers. International shipping available — contact us for details.",
    contact_discount:
      "Minimum order — 2 bars. 10% discount for orders of 5+ bars.",
    contact_footer: "© 2026 VS Soap. Made with love in Ukraine 🇺🇦",
  },
} as const;

export type Translations = typeof translations.uk;
