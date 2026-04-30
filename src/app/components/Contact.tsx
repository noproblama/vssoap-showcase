import { SoapWaveBg2 } from "./DecorativeElements";
import { Instagram, Send, Phone, Mail } from "lucide-react";
import { asset } from "../lib/asset";

export function Contact() {
  return (
    <section
      className="relative pt-20 pb-5 px-6 bg-stone-100 overflow-hidden"
      id="contact"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.3] text-stone-600">
        <SoapWaveBg2 />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-8 text-stone-800">
          Як замовити
        </h2>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-12 border border-stone-100 opacity-85">
          <p className="text-lg text-stone-600 mb-10 leading-relaxed text-center max-w-2xl mx-auto">
            Замовлення приймаю через соціальні мережі або за телефоном.{" "}
            <br className="hidden md:block" />
            Доставка по всій Україні Новою Поштою або Укрпоштою.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full md:w-auto bg-stone-50 text-stone-700 py-4 px-8 rounded-full hover:bg-sage-600 hover:text-white transition-all duration-300 border border-stone-200 shadow-sm hover:shadow-md group"
            >
              <Instagram
                size={22}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="font-medium text-lg md:text-base">
                Instagram
              </span>
            </a>

            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full md:w-auto bg-stone-50 text-stone-700 py-4 px-8 rounded-full hover:bg-sage-600 hover:text-white transition-all duration-300 border border-stone-200 shadow-sm hover:shadow-md group"
            >
              <Send
                size={22}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="font-medium text-lg md:text-base">Telegram</span>
            </a>

            <a
              href="tel:+380000000000"
              className="flex items-center justify-center gap-3 w-full md:w-auto bg-stone-50 text-stone-700 py-4 px-8 rounded-full hover:bg-sage-600 hover:text-white transition-all duration-300 border border-stone-200 shadow-sm hover:shadow-md group"
            >
              <Phone
                size={22}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="font-medium text-lg md:text-base">
                (000) 000-00-00
              </span>
            </a>

            <a
              href="mailto:soap@example.com"
              className="flex items-center justify-center gap-3 w-full md:w-auto bg-stone-50 text-stone-700 py-4 px-8 rounded-full hover:bg-sage-600 hover:text-white transition-all duration-300 border border-stone-200 shadow-sm hover:shadow-md group"
            >
              <Mail
                size={22}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="font-medium text-lg md:text-base">Email</span>
            </a>
          </div>
        </div>

        <p className="text-stone-600">
          Мінімальне замовлення — 2 бруски. При замовленні від 5 брусків —
          знижка 10%
        </p>
      </div>

      <footer className="mt-16 text-center">
        <p className="text-stone-500">
          © 2026 VS Soap. Створено з любов'ю в Україні 🇺🇦
        </p>
      </footer>
    </section>
  );
}
