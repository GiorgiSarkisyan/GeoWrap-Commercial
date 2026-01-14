"use client";
import { ReactNode, useEffect } from "react";
import ReactLenis, { useLenis } from "lenis/react";
import Loading from "./loading";
import { useLoading } from "../contexts/LoadingContext";
import { useLanguage } from "../contexts/LanguageContext";
import { preloadAllAssets } from "../utils/preloadAssets";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const { isLoading, fadeOut, setFadeOut, setIsLoading } = useLoading();
  const { language } = useLanguage();
  const lenis = useLenis();

  // Force scroll to top immediately on page load to prevent browser scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    preloadAllAssets().then(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 500);
    });
  }, [setFadeOut, setIsLoading]);

  useEffect(() => {
    if (!isLoading) {
      lenis?.start();
      return;
    }

    lenis?.stop();
    window.scrollTo(0, 0);

    document.body.style.position = "fixed";
    document.body.style.top = "0px";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, 0);
      lenis?.start();
    };
  }, [isLoading, lenis]);

  return (
    <>
      {isLoading && <Loading fadeOut={fadeOut} />}

      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease",
          pointerEvents: isLoading ? "none" : "auto",
        }}
      >
        <ReactLenis
          root
          options={{
            duration: 2,
            smoothWheel: true,
            wheelMultiplier: 0.4,
            touchMultiplier: 0.7,
            lerp: 0.4,
          }}
        >
          {children}
        </ReactLenis>
      </div>
    </>
  );
}
