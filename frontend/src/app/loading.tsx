"use client";
import { useEffect, useState } from "react";

export default function Loading({ fadeOut = false }: { fadeOut?: boolean }) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setIsHidden(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsHidden(false);
    }
  }, [fadeOut]);

  if (isHidden) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#212020",
        color: "#fff",
        fontSize: "24px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        opacity: fadeOut ? 0 : 1,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        transition: "opacity 0.5s ease",
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div className="loader" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .loader {
              position: relative;
              font-size: 11px;
              width: 1em;
              height: 4em;
              background: #FFF;
              animation: escaleY 1s infinite ease-in-out;
              animation-delay: -0.16s;
              display: inline-block;
            }
            
            .loader:before,
            .loader:after {
              content: '';
              position: absolute;
              top: 0;
              width: 1em;
              height: 4em;
              background: #FFF;
              animation: escaleY 1s infinite ease-in-out;
            }
            
            .loader:before {
              left: -2em;
              animation-delay: -0.32s;
            }
            
            .loader:after {
              left: 2em;
              animation-delay: 0s;
            }

            @keyframes escaleY {
              0%, 80%, 100% {
                height: 4em;
                transform: scaleY(0.5);
              }
              40% {
                height: 5em;
                transform: scaleY(1);
              }
            }
          `,
          }}
        />
      </div>
    </div>
  );
}
