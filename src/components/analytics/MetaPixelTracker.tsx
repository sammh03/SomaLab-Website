import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a Meta Pixel PageView on every SPA route change.
 * The base pixel script (and initial PageView) is loaded in index.html.
 */
export const MetaPixelTracker = () => {
  const { pathname, search } = useLocation();
  const isInitial = useRef(true);

  useEffect(() => {
    if (isInitial.current) {
      // index.html already fired the initial PageView
      isInitial.current = false;
      return;
    }
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, search]);

  return null;
};
