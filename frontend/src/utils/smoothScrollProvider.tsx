"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function SmoothScrollProvider() {
  useEffect(() => {
    // Initialize Lenis with optimized settings for smooth, responsive scrolling
    const lenis = new Lenis({
      duration: 0, // Shorter duration = faster scroll response (was 0.9)
      smoothWheel: true,
      wheelMultiplier: 1.0, // Slightly lower for more control (was 1.2)
      touchMultiplier: 1.0, // Consistent with wheel (was 1.1)
      lerp: 0.08, // Lower lerp = smoother interpolation but more CPU (was 0.1)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing curve for natural feel
      syncTouch: false, // Disable sync-to-touch to avoid conflicts with native touch
    });

    // Use a single RAF loop to drive Lenis updates
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    // Start the animation frame loop
    rafId = requestAnimationFrame(raf);

    // Optional: add small delay to ensure DOM is fully ready
    // (helps avoid initialization lag on slower devices)
    const readyTimeout = setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true }); // Reset scroll position
      }
    }, 100);

    return () => {
      clearTimeout(readyTimeout);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
