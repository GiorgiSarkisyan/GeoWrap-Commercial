import "../styles/global.scss";
import { Montserrat, Oswald, Exo_2 } from "next/font/google";
import ReactLenis from "lenis/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${oswald.variable} ${exo2.variable}`}
      >
        <ReactLenis
          root
          options={{
            duration: 2,
            smoothWheel: true,
            wheelMultiplier: 0.6,
            touchMultiplier: 1.1,
            lerp: 0.4,
          }}
        >
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
