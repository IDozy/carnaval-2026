import "./globals.css";

export const metadata = {
  title: "Carnavalero",
  description: "Coplas, colecciones y ranking del carnaval (iniciando en Cajamarca).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
