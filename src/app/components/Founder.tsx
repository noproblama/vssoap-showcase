import { asset } from "../lib/asset";
import { FadeIn } from "./FadeIn";

export function Founder() {
  return (
    <section
      id="founder"
      className="relative py-20 md:py-28 px-6 bg-stone-50 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 items-center">
        {/* Photo */}
        <FadeIn>
          <div className="relative">
            <img
              src={asset("founder.webp")}
              alt="Тетяна, засновниця VS Soap"
              className="w-full aspect-square object-cover rounded-full"
            />
            {/* decorative border offset */}
            <div className="absolute -inset-3 rounded-full border border-sage-200 -z-10 pointer-events-none" />
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={180}>
          <div>
            <p className="text-stone-600 leading-relaxed mb-5">
              Кілька років тому я відчула потребу зупинити шалений біг і
              зазирнути вглиб себе, повернутися до першоджерел, до того, що є
              справжнім і вічним. Створення мила з нуля саме холодним способом
              стало моїм особистим “поверненням додому”. Для мене це про глибоку
              мудрість природи та повагу до її часу. Тут немає суєти чи
              термічного насилля над інгредієнтами. Олії та трави не варяться,
              вони зберігають свою первісну, ЖИВУ силу і дозрівають тижнями. Це
              мило народжується в спокої, тому воно й саме наче живий організм,
              наповнений цілющою цінністю.
            </p>

            <p className="text-stone-600 leading-relaxed mb-5">
              Моя майстерня - це сакральний простір, де жіноча енергія
              поєднується із силою природи. Коли я беру до рук чисті рослинні
              олії, цілющі трави, глини та 100% ефірні олії, то ніби торкаюся
              самої суті життя. Холодний процес — це дивовижне таїнство. Тут
              немає зовнішнього підігріву. Усе тепло, вся енергія для народження
              мила йде зсередини, із взаємодії самих компонентів. Це стало для
              мене головним духовним уроком: усе найцінніше для нашої
              трансформації вже закладено всередині нас, потрібно лише створити
              умови та дати цьому час і простір.
            </p>

            <p className="text-stone-500 leading-relaxed">
              Земля вже дала нам усе найкраще для здоров’я та гармонії. Через
              своє крафтове мило я передаю вам не просто засіб для догляду, а
              частинку спокою, заземлення та любові, з якою створювалася кожна
              партія.
            </p>

            {/* Signature */}
            <div className="mt-10 flex items-center">
              <span className="italic text-sage-600 text-l">
                З любов’ю, ВелеСлава
              </span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="h-px w-8 bg-sage-300 shrink-0" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-sage-600 font-semibold">
                засновниця
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
