import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Attaches IntersectionObserver to elements with .reveal or .reveal-stagger
 * and adds .revealed when they enter the viewport.
 * Re-runs on every route change.
 */
export const useScrollReveal = () => {
  const location = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect old observer
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-stagger");
    elements.forEach((el) => {
      el.classList.remove("revealed");
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [location.pathname]);
};

/**
 * Thin hook – place inside any page component.
 */
export const ScrollReveal = () => {
  useScrollReveal();
  return null;
};
