import "../styles/global.scss";
import { Montserrat, Oswald, Exo_2 } from "next/font/google";
import { LoadingProvider } from "../contexts/LoadingContext";
import Wrapper from "./wrapper";

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
        <LoadingProvider>
          <Wrapper>{children}</Wrapper>
        </LoadingProvider>
      </body>
    </html>
  );
}
