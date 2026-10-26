// Google Analytics (gtag.js). Call only from the browser (useEffect).
declare global {
  interface Window { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void }
}

let started = false;

export function initAnalytics() {
  if (started || typeof window === "undefined") return;
  const id = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as string | undefined;
  if (!id) return;
  started = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params -- gtag.js needs the Arguments object
    window.dataLayer.push(arguments);
  };
  window.gtag("set", "developer_id.dZjgwMW", true);
  window.gtag("js", new Date());
  window.gtag("config", id);
}

export function trackPageView(path: string) {
  window.gtag?.("event", "page_view", { page_path: path });
}
