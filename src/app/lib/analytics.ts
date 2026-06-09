declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  window.gtag?.(...args);
}

export function trackProductView(productName: string, productSlug: string) {
  gtag("event", "view_item", {
    item_id: productSlug,
    item_name: productName,
    item_category: "soap",
  });
}

export function trackContactClick(channel: "viber" | "whatsapp" | "instagram" | "facebook") {
  gtag("event", "contact", {
    method: channel,
  });
}
