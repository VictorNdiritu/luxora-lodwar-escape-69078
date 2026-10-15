import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Clean, non-blocking page transition wrapper.
 * Ensures page content is immediately mounted and visible without full-screen curtain overlays.
 */
export const PageTransition = ({ children }: PageTransitionProps) => {
  return <div className="page-transition-wrapper animate-fadeIn">{children}</div>;
};
