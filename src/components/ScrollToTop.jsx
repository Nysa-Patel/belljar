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
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
