import { useEffect } from "react";
import { useLocation } from "react-router-dom";

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  // Without this, the browser's own scroll restoration can silently
  // re-scroll the page after a reload, fighting the reset below.
  window.history.scrollRestoration = "manual";
}

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // A plain scrollTo here can lose a race with a child section's own
    // scrollIntoView firing on the same tick, so re-assert it briefly.
    window.scrollTo(0, 0);
    const raf = requestAnimationFrame(() => window.scrollTo(0, 0));
    const timeout = setTimeout(() => window.scrollTo(0, 0), 100);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [pathname]);
  return null;
}
