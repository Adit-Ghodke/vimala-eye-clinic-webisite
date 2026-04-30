import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 * Automatically scrolls the window to the top (0, 0) whenever the route changes.
 * This fixes the issue in SPAs where the scroll position is maintained between navigations.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // We use setTimeout 0 to ensure the scroll happens after the DOM has finished updating
    // and the new page content has been rendered.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
