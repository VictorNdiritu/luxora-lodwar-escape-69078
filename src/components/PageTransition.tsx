import { ReactNode, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Wraps every page. On route change:
 * 1. Ivory curtain sweeps DOWN over the old page (300ms)
 * 2. New page content mounts underneath
 * 3. Curtain sweeps UP revealing the new page (400ms)
 * Total visible transition: ~700ms — no spinners, no blank flashes.
 */
export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const curtainRef = useRef<HTMLDivElement>(null);
  const prevPath = useRef<string>(location.pathname);

  useEffect(() => {
    const curtain = curtainRef.current;
    if (!curtain) return;

    // Skip animation on first load
    if (prevPath.current === location.pathname) {
      return;
    }
    prevPath.current = location.pathname;

    // Sweep down (cover)
    curtain.style.transition = "transform 300ms cubic-bezier(0.76, 0, 0.24, 1)";
    curtain.style.transform = "translateY(0%)";

    const timer = setTimeout(() => {
      // Sweep up (reveal)
      curtain.style.transition = "transform 450ms cubic-bezier(0.76, 0, 0.24, 1)";
      curtain.style.transform = "translateY(-100%)";
    }, 320);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Curtain layer */}
      <div
        ref={curtainRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          background: "hsl(40, 18%, 97%)",
          transform: "translateY(-100%)",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Monogram shown during transition */}
        <div
          style={{
            opacity: 0.25,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            letterSpacing: "0.3em",
            color: "hsl(38, 45%, 48%)",
            userSelect: "none",
          }}
        >
          L X R
        </div>
      </div>

      {/* Page content */}
      <div key={location.pathname}>{children}</div>
    </>
  );
};
