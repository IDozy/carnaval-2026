import ParallaxBackground from "@/src/components/ParallaxBackground";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Carnavalero",
  description: "Coplas y cultura del carnaval (Cajamarca primero, Perú después).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>

        <ParallaxBackground src="/img/hero-cajamarca.png" strength={0.18} />
        {children}


        <Script
          id="adsense"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXX"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
