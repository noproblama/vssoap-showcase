import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Play,
} from "lucide-react";
import { SoapPlaceholder } from "./SoapPlaceholder";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  BotanicalChamomile,
  BotanicalOlive,
  BotanicalRose,
  BotanicalLavender,
  BotanicalHoneycomb,
  BotanicalHerb,
  BotanicalStrawberry,
} from "./DecorativeElements";
import type { ComponentType } from "react";
import type { SoapProfile, KeyIngredient, Product } from "../data/products";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const modalBotanicals: Record<number, ComponentType<{ className?: string }>> = {
  1: BotanicalChamomile,
  2: BotanicalOlive,
  3: BotanicalRose,
  4: BotanicalLavender,
  5: BotanicalHoneycomb,
  6: BotanicalHerb,
  7: BotanicalHerb,
  8: BotanicalRose,
  9: BotanicalChamomile,
  10: BotanicalStrawberry,
  11: BotanicalOlive,
};

/* ── tone → swatch colour for key-ingredient dot ─────────────────────── */
const toneSwatch: Record<NonNullable<KeyIngredient["tone"]>, string> = {
  honey: "bg-amber-300",
  sage: "bg-sage-500",
  rose: "bg-rose-300",
  clay: "bg-stone-400",
  neutral: "bg-stone-300",
};

/* ── parse `## Section` markers from detailedDescription ────────────── */
function parseDescriptionSections(text: string) {
  const trimmed = text.trim();
  const parts = trimmed.split(/\n## /);
  let intro = parts[0] ?? "";
  let firstIsSection = false;
  if (intro.startsWith("## ")) {
    firstIsSection = true;
    intro = "";
  }
  const sectionChunks = firstIsSection
    ? [parts[0].slice(3), ...parts.slice(1)]
    : parts.slice(1);

  const sections = sectionChunks.map((chunk) => {
    const nl = chunk.indexOf("\n");
    const title = (nl === -1 ? chunk : chunk.slice(0, nl)).trim();
    const body = (nl === -1 ? "" : chunk.slice(nl + 1)).trim();
    return { title, body };
  });

  return { intro: intro.trim(), sections };
}

/* ── render paragraphs with **bold** markers preserved ─────────────── */
function Paragraphs({ text }: { text: string }) {
  if (!text) return null;
  return (
    <div className="space-y-2">
      {text.split("\n\n").map((para, i) => {
        const parts = para.split(/\*\*(.*?)\*\*/g);
        return (
          <p
            key={i}
            className="text-stone-600 leading-relaxed text-sm md:text-base"
          >
            {parts.map((part, j) =>
              j % 2 === 1 ? (
                <strong key={j} className="text-stone-800 font-semibold">
                  {part}
                </strong>
              ) : (
                part
              ),
            )}
          </p>
        );
      })}
    </div>
  );
}

/* ── collapsible section (closed by default) ───────────────────────── */
function SectionAccordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-stone-100">
      <button
        className="cursor-pointer w-full flex items-center justify-between gap-4 py-3 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <h4 className="text-base md:text-lg text-stone-800">{title}</h4>
        <ChevronDown
          className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="pb-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ── 5-dot bar (used in profile panel) ────────────────────────────── */
function DotBar({
  value,
  accent = "bg-sage-600",
}: {
  value: number;
  accent?: string;
}) {
  return (
    <div className="flex gap-1 mt-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-1 flex-1 rounded-full ${i < value ? accent : "bg-stone-200"}`}
        />
      ))}
    </div>
  );
}

/* ── profile panel: scent | lather | hardness | skin type ─────────── */
function ProfilePanel({ profile }: { profile: SoapProfile }) {
  const items: Array<{
    key: string;
    label: string;
    value: string;
    bar?: number;
    accent?: string;
  }> = [];

  if (profile.scent)
    items.push({
      key: "scent",
      label: "Аромат",
      value: profile.scent.label,
      bar: profile.scent.intensity,
      accent: "bg-amber-400",
    });
  if (profile.lather)
    items.push({
      key: "lather",
      label: "Піна",
      value: profile.lather.label,
      bar: profile.lather.strength,
    });
  if (profile.hardness)
    items.push({
      key: "hardness",
      label: "Твердість",
      value: profile.hardness.label,
      bar: profile.hardness.level,
    });
  if (profile.skinType)
    items.push({
      key: "skin",
      label: "Для шкіри",
      value: profile.skinType,
    });

  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-2 mb-5">
      {items.map((it) => (
        <div
          key={it.key}
          className="bg-white border border-stone-150 rounded-xl px-3 py-2.5"
          style={{ borderColor: "#ede7da" }}
        >
          <div className="text-[10px] uppercase tracking-[0.12em] text-stone-400 font-medium">
            {it.label}
          </div>
          <div className="text-sm text-stone-800 mt-0.5 leading-snug">
            {it.value}
          </div>
          {typeof it.bar === "number" && (
            <DotBar value={it.bar} accent={it.accent} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ── master's note (no author label) ──────────────────────────────── */
function MasterNote({ text }: { text: string }) {
  return (
    <div
      className="relative my-5 px-5 py-4 rounded-xl border"
      style={{ background: "#f7efde", borderColor: "#ecddb8" }}
    >
      <div className="text-[10px] uppercase tracking-[0.14em] text-stone-500 mb-1.5">
        З майстерні
      </div>
      <p
        className="text-stone-700 italic leading-relaxed text-[15px] md:text-base"
        style={{ fontFamily: "var(--font-display)" }}
      >
        «{text}»
      </p>
    </div>
  );
}

/* ── key-ingredient row (name + tone-coloured dot + one-word role) ── */
function KeyIngredients({ items }: { items: KeyIngredient[] }) {
  return (
    <ul className="divide-y divide-stone-100 border-y border-stone-100">
      {items.map((it, i) => (
        <li
          key={i}
          className="flex items-center gap-3 py-2.5 text-sm md:text-base"
        >
          <span
            className={`w-2 h-2 rounded-full shrink-0 ${toneSwatch[it.tone ?? "neutral"]}`}
          />
          <span className="text-stone-800 flex-1">{it.name}</span>
          <span className="text-stone-500 text-xs md:text-sm tabular-nums">
            {it.role}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ── full ingredient list (collapsed by default) ──────────────────── */
function FullIngredients({ list }: { list: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-stone-100">
      <button
        className="cursor-pointer w-full flex items-center justify-between gap-4 py-3 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <h4 className="text-base md:text-lg text-stone-800">Повний склад</h4>
        <ChevronDown
          className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <ul className="pb-4 space-y-1">
            {list.map((ingredient, index) => (
              <li
                key={index}
                className="text-stone-600 text-sm md:text-base flex items-start"
              >
                <span className="text-sage-600 mr-2">•</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ── quick messengers row (prefilled message where supported) ─────── */
function QuickMessengers({ productName }: { productName: string }) {
  const msg = `Доброго дня! Хочу замовити мило «${productName}». Підкажіть, будь ласка, деталі.`;
  const waUrl = `https://wa.me/380966087578?text=${encodeURIComponent(msg)}`;
  const viberUrl = `viber://chat?number=%2B380966087578`;
  const igUrl = `https://ig.me/m/_vele_slava`;

  const copyMessage = async () => {
    try {
      await navigator.clipboard?.writeText(msg);
    } catch {
      /* clipboard might be blocked — fine, link still opens */
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-3">
      <span className="text-xs text-stone-500 mr-1">або одразу написати:</span>
      <a
        href={viberUrl}
        onClick={copyMessage}
        aria-label="Написати у Viber"
        title="Viber — повідомлення скопійоване"
        className="w-8 h-8 rounded-full bg-stone-100 hover:bg-sage-200 transition-colors flex items-center justify-center text-stone-600"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 4C12.4477 4 12 4.44772 12 5C12 5.55228 12.4477 6 13 6C14.2728 6 15.2557 6.41989 15.9179 7.08211C16.5801 7.74433 17 8.72725 17 10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10C19 8.27275 18.4199 6.75567 17.3321 5.66789C16.2443 4.58011 14.7272 4 13 4Z" />
          <path d="M5.014 8.00613C5.12827 7.1024 6.30277 5.87414 7.23488 6.01043C8.01251 6.15699 8.65217 7.32965 9.07373 8.10246C9.14298 8.22942 9.20635 8.34559 9.26349 8.44465C9.55041 8.95402 9.3641 9.4701 9.09655 9.68787C9.06561 9.7128 9.03317 9.73855 8.9998 9.76504C8.64376 10.0477 8.18114 10.4149 8.28943 10.7834C8.5 11.5 11 14 12.2296 14.7107C12.6061 14.9283 12.8988 14.5057 13.1495 14.1438C13.2087 14.0583 13.2656 13.9762 13.3207 13.9067C13.5301 13.6271 14.0466 13.46 14.5548 13.736C15.3138 14.178 16.0288 14.6917 16.69 15.27C17.0202 15.546 17.0977 15.9539 16.8689 16.385C16.4659 17.1443 15.3003 18.1456 14.4542 17.9421C12.9764 17.5868 7 15.27 5.08033 8.55801C4.97981 8.26236 4.99645 8.13792 5.01088 8.02991L5.014 8.00613Z" />
          <path d="M13 7C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9C13.1748 9 13.4332 9.09745 13.6679 9.33211C13.9025 9.56676 14 9.82523 14 10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10C16 9.17477 15.5975 8.43324 15.0821 7.91789C14.5668 7.40255 13.8252 7 13 7Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M7.51742 23.8312C7.54587 23.8469 7.57508 23.8612 7.60492 23.874C8.14762 24.1074 8.81755 23.5863 10.1574 22.5442L11.5 21.5C14.1884 21.589 16.514 21.2362 18.312 20.6071C20.3227 19.9035 21.9036 18.3226 22.6072 16.3119C23.5768 13.541 23.5768 8.45883 22.6072 5.68794C21.9036 3.67722 20.3227 2.0963 18.312 1.39271C15.1103 0.272407 8.82999 0.293306 5.68806 1.39271C3.67733 2.0963 2.09642 3.67722 1.39283 5.68794C0.423255 8.45883 0.423255 13.541 1.39283 16.3119C2.09642 18.3226 3.67733 19.9035 5.68806 20.6071C6.08252 20.7451 6.52371 20.8965 7 21C7 22.6974 7 23.5461 7.51742 23.8312ZM9 20.9107V19.7909C9 19.5557 8.836 19.3524 8.60597 19.3032C7.84407 19.1403 7.08676 18.9776 6.34862 18.7193C4.91238 18.2168 3.78316 17.0875 3.2806 15.6513C2.89871 14.5599 2.66565 12.8453 2.66565 10.9999C2.66565 9.15453 2.89871 7.43987 3.2806 6.3485C3.78316 4.91227 4.91238 3.78304 6.34862 3.28048C7.61625 2.83692 9.71713 2.56282 11.9798 2.56032C14.2422 2.55782 16.3561 2.82723 17.6514 3.28048C19.0876 3.78304 20.2169 4.91227 20.7194 6.3485C21.1013 7.43987 21.3344 9.15453 21.3344 10.9999C21.3344 12.8453 21.1013 14.5599 20.7194 15.6513C20.2169 17.0875 19.0876 18.2168 17.6514 18.7193C15.5197 19.4652 13.259 19.549 11.0239 19.4828C10.9071 19.4794 10.7926 19.5165 10.7004 19.5882L9 20.9107Z" />
        </svg>
      </a>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написати у WhatsApp"
        title="WhatsApp"
        className="w-8 h-8 rounded-full bg-stone-100 hover:bg-sage-200 transition-colors flex items-center justify-center text-stone-600"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" />
        </svg>
      </a>
      <a
        href={igUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={copyMessage}
        aria-label="Написати у Instagram"
        title="Instagram — повідомлення скопійоване"
        className="w-8 h-8 rounded-full bg-stone-100 hover:bg-sage-200 transition-colors flex items-center justify-center text-stone-600"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </a>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   MAIN
   ───────────────────────────────────────────────────────────────────── */
export function ProductModal({
  product,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: ProductModalProps) {
  const isPremium = product.category === "premium";
  const [activeIndex, setActiveIndex] = useState(0);

  const allMedia = [
    { type: "image" as const, src: product.image },
    ...(product.additionalImages || []).map((src) => ({
      type: "image" as const,
      src,
    })),
    ...(product.videoUrl
      ? [{ type: "video" as const, src: product.videoUrl }]
      : []),
  ];

  useEffect(() => {
    setActiveIndex(0);
  }, [product.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrevious();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onNext, onPrevious, onClose]);

  const activeMedia = allMedia[activeIndex];
  const ModalBotanical = modalBotanicals[product.id];

  const { intro, sections } = parseDescriptionSections(
    product.detailedDescription || product.description || "",
  );

  const availabilityText =
    product.stockNote ??
    (product.status === "curing"
      ? product.cureUntil
        ? `Дозріває до ${product.cureUntil} · можна забронювати`
        : "Зараз дозріває · можна забронювати"
      : "Наявність уточнюйте");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 md:p-4"
        onClick={onClose}
      >
        {/* Modal box — full screen on mobile, capped on desktop */}
        <div
          className="relative w-full h-dvh md:h-auto md:max-w-[720px] md:max-h-[92dvh] flex flex-col bg-white rounded-none md:rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <DialogTitle className="sr-only">{product.name}</DialogTitle>

          {/* ── Sticky header: prev / title+price / next / close ── */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-stone-100 px-3 py-2.5 flex items-center gap-1 shrink-0">
            <button
              onClick={onPrevious}
              className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-500 hover:text-stone-800"
              aria-label="Попередній"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex-1 flex items-baseline justify-between px-2 min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <h2 className="text-xl md:text-2xl text-stone-800 truncate">
                  {product.name}
                </h2>
              </div>
              <span className="shrink-0 text-lg md:text-xl text-sage-700 ml-3">
                {product.price}
              </span>
            </div>

            <button
              onClick={onNext}
              className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-500 hover:text-stone-800"
              aria-label="Наступний"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-400 hover:text-stone-700 ml-0.5"
              aria-label="Закрити"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ── Scrollable content ── */}
          <div className="overflow-y-auto overflow-x-hidden flex-1 relative">
            {/* Botanical watermark */}
            {ModalBotanical && (
              <div className="absolute -bottom-8 -right-6 pointer-events-none opacity-[0.07] text-stone-700">
                <ModalBotanical className="w-44 h-auto" />
              </div>
            )}

            <div className="p-4 md:p-6">
              {isPremium && (
                <div className="mb-3 absolute top-6 right-6 md:top-8 md:right-8">
                  <span className="bg-sage-700 text-white px-3 py-1 rounded-full text-xs">
                    Premium
                  </span>
                </div>
              )}

              {/* Main viewer */}
              <div className="aspect-video rounded-xl overflow-hidden bg-stone-100 mb-2">
                {activeMedia.type === "image" ? (
                  activeMedia.src.startsWith("/") ? (
                    <ImageWithFallback
                      src={activeMedia.src}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <SoapPlaceholder
                      name={product.name}
                      className="w-full h-full"
                    />
                  )
                ) : (
                  <video
                    key={activeMedia.src}
                    src={activeMedia.src}
                    controls
                    autoPlay
                    className="w-full h-full"
                  />
                )}
              </div>

              {/* Thumbnail strip */}
              {allMedia.length > 1 && (
                <div className="flex gap-1.5 mb-4">
                  {allMedia.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`relative w-14 h-14 shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                        activeIndex === index
                          ? "border-sage-600"
                          : "border-transparent hover:border-stone-300"
                      }`}
                    >
                      {media.type === "image" ? (
                        media.src.startsWith("/") ? (
                          <ImageWithFallback
                            src={media.src}
                            alt={`${product.name} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <SoapPlaceholder
                            name={product.name}
                            className="w-full h-full"
                          />
                        )
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-stone-200">
                          <Play className="w-5 h-5 text-stone-500" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* ── Tagline (1-line promise) ─────────────────────── */}
              {product.tagline && (
                <p
                  className="text-stone-700 italic text-lg md:text-xl leading-snug mb-4 mt-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {product.tagline}
                </p>
              )}

              {/* ── Profile panel (scent / lather / hardness / skin) ─ */}
              {product.profile && <ProfilePanel profile={product.profile} />}

              {/* ── Description (intro always visible) ───────────── */}
              <div className="relative z-10 mb-2">
                <Paragraphs text={intro} />
              </div>

              {/* ── Accordion sections from `## ` markers ────────── */}
              {sections.length > 0 && (
                <div className="relative z-10 mt-2 mb-4">
                  {sections.map((s, i) => (
                    <SectionAccordion key={i} title={s.title}>
                      <Paragraphs text={s.body} />
                    </SectionAccordion>
                  ))}
                </div>
              )}

              {/* ── Master note ──────────────────────────────────── */}
              {product.masterNote && (
                <div className="relative z-10">
                  <MasterNote text={product.masterNote} />
                </div>
              )}

              {/* ── Key ingredients (3-5 heroes with role) ───────── */}
              {product.keyIngredients &&
                product.keyIngredients.length > 0 && (
                  <div className="relative z-10 mb-4">
                    <h3 className="text-lg text-stone-800 mb-2">
                      Головні складники
                    </h3>
                    <KeyIngredients items={product.keyIngredients} />
                  </div>
                )}

              {/* ── Benefits (renamed "Що дає шкірі") ────────────── */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="relative z-10 mb-4">
                  <h3 className="text-lg text-stone-800 mb-2">
                    Що дає шкірі
                  </h3>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="text-stone-600 text-sm md:text-base flex items-start"
                      >
                        <span className="text-sage-600 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ── Full composition (collapsed) ─────────────────── */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="relative z-10 mb-2">
                  <FullIngredients list={product.ingredients} />
                </div>
              )}

              {/* ── Order CTA ────────────────────────────────────── */}
              <div className="mt-5 pt-4 border-t border-stone-200 relative z-10">
                {/* availability hint */}
                <div className="flex items-center justify-center gap-1.5 mb-2.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      product.status === "curing"
                        ? "bg-amber-400"
                        : product.status === "ready"
                          ? "bg-sage-600"
                          : "bg-stone-400"
                    }`}
                  />
                  <span className="text-xs text-stone-500">
                    {availabilityText}
                  </span>
                </div>

                <a
                  href="#contact"
                  onClick={onClose}
                  className="block w-full text-center bg-sage-600 text-white py-3.5 px-8 rounded-full hover:bg-sage-700 transition-all shadow-sm text-base md:text-lg"
                >
                  Хочу замовити «{product.name}»
                </a>
                <p className="text-center text-stone-500 mt-2 text-xs">
                  Напишемо у Viber, WhatsApp або Instagram — допоможемо обрати
                  кількість і узгодимо доставку
                </p>

                <QuickMessengers productName={product.name} />

                <p className="text-center text-stone-400 mt-3 text-xs">
                  ← → для перегляду інших видів мила
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
