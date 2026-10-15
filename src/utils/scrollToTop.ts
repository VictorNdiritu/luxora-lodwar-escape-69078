import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Universally safe scroll to top on route change.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch {
      // safe fallback
    }
  }, [pathname]);

  return null;
};